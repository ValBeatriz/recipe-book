import { PlatoRepository } from "../repositories";

export const deleteDishUseCase = async (id: string): Promise<void> => {
    await PlatoRepository.getById(id);
    await PlatoRepository.delete(id);
};