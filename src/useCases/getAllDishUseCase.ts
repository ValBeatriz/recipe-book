import { PlatoRepository } from "../repositories";
import { PlatoEntity } from "../entities";

export const getAllDishUseCase = async (): Promise<PlatoEntity[]> => {
    return await PlatoRepository.getAll();
};