import { PlatoRepository } from "../repositories";
import { RecipeDetailModel } from "../controllers/model/recipeDetailModel";

export const getByIdDishUseCase = async (id: string): Promise<RecipeDetailModel | null> => {
    return await PlatoRepository.getById(id);
};