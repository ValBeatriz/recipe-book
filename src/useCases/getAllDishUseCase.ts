import { PlatoEntity } from "../entities";
import { platoRepository } from "../repositories";

export const getAllDishUseCase = async (): Promise<PlatoEntity[]> => {
    return await platoRepository.getAll();
};