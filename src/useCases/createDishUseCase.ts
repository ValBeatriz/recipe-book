import { PlatoEntity } from "../entities";
import { PlatoRepository } from "../repositories";

export const createDishUseCase = async (dish: PlatoEntity): Promise<PlatoEntity | null> => {
    return await PlatoRepository.create(dish);
};