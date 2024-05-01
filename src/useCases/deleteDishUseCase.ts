import { PlatoRepository } from "../repositories";
import { validateUUID } from "../validate/uuid_validate";

export const deleteDishUseCase = async (id: string): Promise<void> => {
    await validateUUID(id);
    await PlatoRepository.getById(id);
    await PlatoRepository.delete(id);
};