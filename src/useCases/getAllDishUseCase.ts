import { PlatoRepository } from "../repositories";
import { PaginationModel } from "../controllers/model/paginationModel";
import { RecipePagingModel } from "../controllers/model/recipePagingModel";

export const getAllDishUseCase = async (pag: PaginationModel): Promise<RecipePagingModel> => {
    const count = await PlatoRepository.getTotalItem(pag.Search);
    return await PlatoRepository.getAll(pag, count);
};