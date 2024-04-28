import { UUID } from "crypto";
import { PlatoEntity } from "../entities";
import { platoRepository } from "../repositories";

export const getByIdDishUseCase = async (id: UUID): Promise<PlatoEntity | null> => {
    return await platoRepository.getById(id);
};