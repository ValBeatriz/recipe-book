import { getAllCategoriesUseCase } from '../src/useCases';
import { CategoriaRepository } from '../src/repositories';
import { CategoryModel } from '../src/controllers/model/categoryModel';

// Mock de la función getAll de CategoriaRepository
jest.mock('../src/repositories', () => ({
  CategoriaRepository: {
    getAll: jest.fn()
  }
}));

describe('getAllCategoriesUseCase', () => {
  it('should return all categories', async () => {
    // Datos de prueba
    const mockCategories: CategoryModel[] = [
      { IdCategory: '1', Category: 'Category 1' },
      { IdCategory: '2', Category: 'Category 2' }
    ];

    (CategoriaRepository.getAll as jest.Mock).mockResolvedValueOnce(mockCategories);

    const result = await getAllCategoriesUseCase();

    expect(result).toEqual(mockCategories);
    expect(CategoriaRepository.getAll).toHaveBeenCalledTimes(1);
  });

});