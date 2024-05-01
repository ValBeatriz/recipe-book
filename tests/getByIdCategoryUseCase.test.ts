import { getByIdCategoryUseCase } from '../src/useCases';
import { CategoriaRepository } from '../src/repositories';
import { CategoryModel } from '../src/controllers/model/categoryModel';

// Mock de la función getById de CategoriaRepository
jest.mock('../src/repositories', () => ({
  CategoriaRepository: {
    getById: jest.fn()
  }
}));

describe('getByIdCategoryUseCase', () => {
  it('should return category data by ID', async () => {
    // Datos de prueba
    const categoryId = '77425193-2511-4de4-a0f2-8bb58b24cdaf';
    const mockCategoryData: CategoryModel = {
      IdCategory: categoryId,
      Category: 'Postre'
    };

    (CategoriaRepository.getById as jest.Mock).mockResolvedValueOnce(mockCategoryData);

    const result = await getByIdCategoryUseCase(categoryId);

    expect(result).toEqual(mockCategoryData);
    expect(CategoriaRepository.getById).toHaveBeenCalledWith(categoryId);
  });

});
