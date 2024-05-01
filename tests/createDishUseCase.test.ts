import { createDishUseCase } from '../src/useCases';
import { PlatoEntity } from '../src/entities';
import { PlatoRepository, CategoriaRepository } from '../src/repositories';
import { validateUUID } from '../src/validate/uuid_validate';

// Mock de PlatoRepository
jest.mock('../src/repositories/platoRepository', () => ({
  PlatoRepository: {
    create: jest.fn()
  }
}));

// Mock de CategoriaRepository
jest.mock('../src/repositories/categoriaRepository', () => ({
  CategoriaRepository: {
    getById: jest.fn()
  }
}));

// Mock de validateUUID
jest.mock('../src/validate/uuid_validate', () => ({
  validateUUID: jest.fn(),
}));

describe('createDishUseCase', () => {
  it('should create a new dish', async () => {
    // Datos de prueba para el plato
    const dishData: PlatoEntity = {
      nombre: "Lasaña",
      preparacion: "En una fuente poner las capas de lasaña alternando con la salsa y el queso",
      ingredientes: "Caja de lazaña, queso, salsa de tomate o a gusto, carne",
      id_categoria: "9dcc7647-4fb6-493b-b25e-b243f1713833"
    };

    (validateUUID as jest.Mock).mockResolvedValueOnce('9dcc7647-4fb6-493b-b25e-b243f1713833');

    (CategoriaRepository.getById as jest.Mock).mockResolvedValueOnce('9dcc7647-4fb6-493b-b25e-b243f1713833');

    await createDishUseCase(dishData);

    expect(validateUUID).toHaveBeenCalledWith(dishData.id_categoria);
    expect(CategoriaRepository.getById).toHaveBeenCalledWith(dishData.id_categoria);
    expect(PlatoRepository.create).toHaveBeenCalledWith(dishData);
  });
});