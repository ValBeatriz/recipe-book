import { PlatoEntity } from "../entities";
import { platoRepository } from "../repositories";

export const createDishUseCase = async (dish: PlatoEntity): Promise<PlatoEntity | null> => {
    return await platoRepository.create(dish);
};