import { UUID } from "crypto";
import { PlatoEntity } from "../entities";
import { platoRepository } from "../repositories";

export const deleteDishUseCase = async (id: UUID): Promise<boolean> => {
    return await platoRepository.delete(id);
};