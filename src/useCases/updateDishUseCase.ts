import { PlatoEntity } from "../entities";
import { PlatoRepository } from "../repositories";

export const updateDishUseCase = async (id: string, dish: PlatoEntity): Promise<PlatoEntity | null> => {
    return await PlatoRepository.update(id, dish);
};