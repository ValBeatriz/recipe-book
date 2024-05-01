import { getAllDishUseCase } from '../src/useCases';
import { PlatoRepository } from '../src/repositories';
import { PaginationModel } from '../src/controllers/model/paginationModel';
import { RecipePagingModel } from '../src/controllers/model/recipePagingModel';

// Mock de la función getTotalItem de PlatoRepository
jest.mock('../src/repositories', () => ({
    PlatoRepository: {
        getTotalItem: jest.fn(),
        getAll: jest.fn()
    }
}));

describe('getAllDishUseCase', () => {
    it('should return recipe paging data', async () => {
        // Datos de prueba
        const mockPagination: PaginationModel = {
            CurrentPage: 1,
            PageSize: 10,
            Search: 'query'
        };

        const mockTotalCount = 20;

        const mockRecipePaging: RecipePagingModel = {
            Items: [],
            TotalPages: 2,
            CurrentPage: 1,
            TotalCount: mockTotalCount,
            PageSize: 5
        };

        (PlatoRepository.getTotalItem as jest.Mock).mockResolvedValueOnce(mockTotalCount);

        (PlatoRepository.getAll as jest.Mock).mockResolvedValueOnce(mockRecipePaging);

        const result = await getAllDishUseCase(mockPagination);

        expect(result).toEqual(mockRecipePaging);
        expect(PlatoRepository.getTotalItem).toHaveBeenCalledWith(mockPagination.Search);
        expect(PlatoRepository.getAll).toHaveBeenCalledWith(mockPagination, mockTotalCount);
    });

});
