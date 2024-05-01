import { PlatoEntity } from "../entities";
import { PlatoRepository, CategoriaRepository } from "../repositories";
import { validateUUID } from "../validate/uuid_validate";

export const updateDishUseCase = async (id: string, dish: PlatoEntity): Promise<void> => {
    await validateUUID(id);
    await validateUUID(dish.id_categoria);
    await PlatoRepository.getById(id);
    await CategoriaRepository.getById(dish.id_categoria);
    await PlatoRepository.update(id, dish);
};