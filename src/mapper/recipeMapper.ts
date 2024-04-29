import { PlatoEntity } from "../entities";
import { RecipeDetailModel } from "../controllers/model/recipeDetailModel";
import { RecipeBasicModel } from "../controllers/model/recipeBasicModel";

export const listRecipesEntityToModelMapper = async (entities: PlatoEntity[]): Promise<RecipeBasicModel[]> => {
    
    if(!entities) {
        const responseEmpty: RecipeBasicModel[] = [];
        return responseEmpty;
    }
    const model: RecipeBasicModel[] = entities.map(d => new RecipeBasicModel(d?.id_plato ?? '', d.nombre, d.id_categoria, d?.categoria ?? ''));

    return model;
};

export const recipeEntityToModelMapper = async (entity: PlatoEntity): Promise<RecipeDetailModel | null> => {
    
    if(entity == null) {
        return null;
    }
    const model: RecipeDetailModel = new RecipeDetailModel(entity?.id_plato ?? '', entity.nombre, entity.id_categoria, entity?.categoria ?? '', entity.ingredientes, entity.preparacion);
 
    return model;
};