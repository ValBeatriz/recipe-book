import { PlatoEntity } from "../entities";
import { PlatoRepository } from "../repositories";

export const getByIdDishUseCase = async (id: string): Promise<PlatoEntity | null> => {
    return await PlatoRepository.getById(id);
};