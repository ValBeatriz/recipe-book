import { CategoriaRepository } from "../repositories";
import { CategoryModel } from "../controllers/model/categoryModel";

export const getAllCategoriesUseCase = async (): Promise<CategoryModel[]> => {
    return await CategoriaRepository.getAll();
};