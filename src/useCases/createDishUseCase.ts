import { PlatoEntity } from "../entities";
import { PlatoRepository, CategoriaRepository } from "../repositories";

export const createDishUseCase = async (dish: PlatoEntity): Promise<void> => {
    await CategoriaRepository.getById(dish.id_categoria);
    await PlatoRepository.create(dish);
};