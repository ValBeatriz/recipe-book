import { pool } from '../adapters'
import { PlatoEntity } from '../entities'
import { RecipeDetailModel } from '../controllers/model/recipeDetailModel'
import { recipeEntityToModelMapper, listRecipesEntityToModelMapper } from '../mapper'
import { PaginationModel } from '../controllers/model/paginationModel'
import { RecipePagingModel } from '../controllers/model/recipePagingModel'
import { ErrorModel } from '../controllers/model/error'

export class PlatoRepository {
    static create = async (plato: PlatoEntity): Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            pool.connect((err) => {
                if (err) {
                    console.error("Error connecting yo postgre", err);
                    reject(err);
                    return;
                }

                pool.query(`INSERT INTO plato (nombre, descripcion, preparacion, ingredientes, id_categoria) values ('${plato.nombre}','${plato?.descripcion ?? ''}','${plato.preparacion}','${plato.ingredientes}','${plato.id_categoria}')`, (queryError, result) => {

                    if (queryError) {
                        console.error("Error on the query", queryError);
                        reject(new ErrorModel());
                        return;
                    }
                    console.log('OK');
                    resolve();
                    return;

                });
            })
        })
    }
    static getAll = async (pag: PaginationModel, count: number): Promise<RecipePagingModel> => {
        return new Promise((resolve,reject) => {
            let query: string = `SELECT p.*, c.nombre as categoria 
            FROM plato p 
            INNER JOIN categoria c on p.id_categoria = c.id_categoria
            LIMIT (${pag.PageSize})
            OFFSET ${pag.PageSize * (pag.CurrentPage - 1)}`; 

            if(pag.Search && pag.Search.trim() != '') {
                query = `SELECT p.*, c.nombre as categoria 
                FROM plato p
                INNER JOIN categoria c on p.id_categoria = c.id_categoria
                WHERE p.nombre iLIKE '%${pag.Search}%' 
                or p.preparacion ilike '%${pag.Search}%'
                or p.ingredientes ilike '%${pag.Search}%'
                or c.nombre ilike '%${pag.Search}%'
                LIMIT (${pag.PageSize})
                OFFSET ${pag.PageSize * (pag.CurrentPage - 1)}`; 
            }
            pool.query(query,async (error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                const models = await listRecipesEntityToModelMapper(results.rows as PlatoEntity[]);
                const totalPage = Math.ceil(count/pag.PageSize); 
                const result = new RecipePagingModel(totalPage, pag.PageSize, pag.CurrentPage, count, models);
                resolve(result);
                return;
            });
        });
    }
    static getById = async (id: string): Promise<RecipeDetailModel | null> => {
        return new Promise((resolve,reject) => {
            pool.query(`SELECT p.*, c.nombre as categoria FROM plato p inner join categoria c on p.id_categoria = c.id_categoria where p.id_plato = '${id}'`,(error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                if(results.rows.length === 0) {
                    reject(new ErrorModel(404, "Recipe not found"));
                } else {
                    const model = recipeEntityToModelMapper(results.rows[0] as PlatoEntity);
                    resolve(model);
                }

                return;
            });
        });
    }
    static update = async (id: string, plato: PlatoEntity): Promise<void> => {
        return new Promise((resolve,reject) => {
            pool.query(`UPDATE plato SET nombre='${plato.nombre}', ingredientes='${plato.ingredientes}', preparacion='${plato.preparacion}' where id_plato = '${id}'`,(error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                if(results.rowCount && results.rowCount > 0){
                    resolve();
                } else {
                    reject(new ErrorModel(404, "No record was modified"));
                }
            });
        });
    }
    static delete =  async (id: string): Promise<void> => {
        return new Promise((resolve,reject) => {
            pool.query(`DELETE FROM plato where id_plato = '${id}'`,(error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }

                if(results.rowCount && results.rowCount > 0){
                    resolve();
                } else {
                    reject(new ErrorModel(404, "No record was delete"));
                }

                return;
            });
        });
    }
    static getTotalItem = async (search: string): Promise<number> => {
        return new Promise((resolve,reject) => {
            let query: string = 'SELECT count(p.*) as countdata FROM plato p'; 
            if(search && search.trim() != '') {
                query = `SELECT count(p.*) as countdata 
                FROM plato p
                INNER JOIN categoria c on p.id_categoria = c.id_categoria
                WHERE p.nombre iLIKE '%${search}%' 
                or p.preparacion ilike '%${search}%'
                or p.ingredientes ilike '%${search}%'
                or c.nombre ilike '%${search}%'`; 
            }
            pool.query(query, (error, results) => {

                if (error) {
                    console.error("Error on the query", error);
                    reject(new ErrorModel());
                    return;
                }
                resolve(results.rows[0].countdata as number);
                return;
            });
        });
    }
}