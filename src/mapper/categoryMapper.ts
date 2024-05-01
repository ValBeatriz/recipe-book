import { CategoryModel } from "../controllers/model/categoryModel";
import { CategoriaEntity } from "../entities";

export const categoryModelToEntityMapper = async (model: CategoryModel): Promise<CategoriaEntity | null> => {
    
    if(model == null) {
        return null;
    }

    const entity: CategoriaEntity = new CategoriaEntity(model.IdCategory, model.Category);

    return entity;
};

export const listCategoryEntityToModelMapper = async (entities: CategoriaEntity[]): Promise<CategoryModel[] | null> => {
    
    if(!entities) {
        return null;
    }
    const model: CategoryModel[] = entities.map(d => new CategoryModel(d.id_categoria, d.nombre));

    return model;
};

export const categoryEntityToModelMapper = async (entity: CategoriaEntity): Promise<CategoryModel | null> => {
    
    if(entity == null) {
        return null;
    }
    const model: CategoryModel = new CategoryModel(entity.id_categoria, entity.nombre);
 
    return model;
};