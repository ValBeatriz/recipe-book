import { PlatoRepository } from "../repositories";
import { RecipeDetailModel } from "../controllers/model/recipeDetailModel";
import { validateUUID } from "../validate/uuid_validate";

export const getByIdDishUseCase = async (id: string): Promise<RecipeDetailModel | null> => {
    await validateUUID(id);
    return await PlatoRepository.getById(id);
};