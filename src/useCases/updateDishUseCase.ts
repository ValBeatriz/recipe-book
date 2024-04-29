import { PlatoEntity } from "../entities";
import { PlatoRepository, CategoriaRepository } from "../repositories";

export const updateDishUseCase = async (id: string, dish: PlatoEntity): Promise<void> => {
    await PlatoRepository.getById(id);
    await CategoriaRepository.getById(dish.id_categoria);
    await PlatoRepository.update(id, dish);
};