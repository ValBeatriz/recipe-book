import { CategoriaRepository } from "../repositories";
import { CategoryModel } from "../controllers/model/categoryModel";
import { validateUUID } from "../validate/uuid_validate";

export const getByIdCategoryUseCase = async (id: string): Promise<CategoryModel | null> => {
    await validateUUID(id);
    return await CategoriaRepository.getById(id);
};