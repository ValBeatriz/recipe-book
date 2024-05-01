import { pool } from '../adapters'
import { CategoriaEntity } from '../entities'
import { CategoryModel } from '../controllers/model/categoryModel';
import { categoryEntityToModelMapper, listCategoryEntityToModelMapper } from '../mapper';
import { ErrorModel } from '../controllers/model/error';

export class CategoriaRepository {
    
    static getAll = async (): Promise<CategoryModel[]> => {
        return new Promise((resolve,reject) => {
            pool.query("SELECT * FROM categoria ",async (error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                const model = await listCategoryEntityToModelMapper(results.rows as CategoriaEntity[]);

                resolve(model as CategoryModel[]);
                return;
            });
        });
    }
    static getById = async (id: string): Promise<CategoryModel | null> => {
        return new Promise((resolve,reject) => {
            pool.query(`SELECT * FROM categoria where id_categoria = '${id}'`,async (error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                if(results.rows.length === 0){
                    reject(new ErrorModel(404, "Category not found"));
                } else {
                    const model = await categoryEntityToModelMapper(results.rows[0] as CategoriaEntity);
                    resolve(model);
                }

                return;
            });
        });
    }
    
}