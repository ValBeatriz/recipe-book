import { CategoriaRepository } from "../repositories";
import { CategoryModel } from "../controllers/model/categoryModel";

export const getByIdCategoryUseCase = async (id: string): Promise<CategoryModel | null> => {
    return await CategoriaRepository.getById(id);
};