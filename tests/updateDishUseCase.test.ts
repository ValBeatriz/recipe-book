import { updateDishUseCase } from '../src/useCases';
import { PlatoRepository, CategoriaRepository } from '../src/repositories';
import { PlatoEntity } from '../src/entities';

// Mock de las funciones getById y update de PlatoRepository
jest.mock('../src/repositories', () => ({
  PlatoRepository: {
    getById: jest.fn(),
    update: jest.fn()
  },
  CategoriaRepository: {
    getById: jest.fn()
  }
}));

describe('updateDishUseCase', () => {
  it('should update a dish', async () => {
    const dishId = 'a0579574-e1a0-441d-a60c-8ac8f16cddb3';
    const dish: PlatoEntity = {
      nombre: 'Queque marmolado',
      preparacion: 'En un recipiente mezclar los huevos, mantequilla y azucar, batir hasta que sea una mezcla homogenea. Vertir la leche y la harina, alternando entre los dos mientras se sigue mezclando. en un recipiente apartar 10 cucharadas para mezclar con cacao. Finalmente vertir en un molde enmantequillado y meter al horno durante 50-60 min. Retirar del horno, esperar a que entibie y disfrutar. ',
      id_categoria: '6abb353b-5f39-42c0-a62b-3ce2af8793b9',
      ingredientes: '3 huevos, 2 tazas de azucar, 3 cucharadas de mantequilla, 2 tazas de leche, 4 de harina con polvos de hornear, 3 cucharadas de cacao en polvo.',
      id_plato: 'e453ad7c-50df-48e1-ab6b-742d4a14ffd0',
      descripcion: '',
      categoria: 'Reposteria'
    };

    (PlatoRepository.getById as jest.Mock).mockResolvedValueOnce(dish);
    (CategoriaRepository.getById as jest.Mock).mockResolvedValueOnce('6abb353b-5f39-42c0-a62b-3ce2af8793b9');

    await updateDishUseCase(dishId, dish);

    expect(PlatoRepository.getById).toHaveBeenCalledWith(dishId);
    expect(CategoriaRepository.getById).toHaveBeenCalledWith(dish.id_categoria);
    expect(PlatoRepository.update).toHaveBeenCalledWith(dishId, dish);
  });
});
