import { PlatoRepository } from "../repositories";

export const deleteDishUseCase = async (id: string): Promise<boolean> => {
    return await PlatoRepository.delete(id);
};