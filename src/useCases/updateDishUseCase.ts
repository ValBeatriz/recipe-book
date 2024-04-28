import { UUID } from "crypto";
import { PlatoEntity } from "../entities";
import { platoRepository } from "../repositories";

export const updateDishUseCase = async (id: UUID, dish: PlatoEntity): Promise<PlatoEntity | null> => {
    return await platoRepository.update(id, dish);
};