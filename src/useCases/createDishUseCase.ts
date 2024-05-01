import { PlatoEntity } from "../entities";
import { PlatoRepository, CategoriaRepository } from "../repositories";
import { validateUUID } from "../validate/uuid_validate";

export const createDishUseCase = async (dish: PlatoEntity): Promise<void> => {
    await validateUUID(dish.id_categoria);
    await CategoriaRepository.getById(dish.id_categoria);
    await PlatoRepository.create(dish);
};