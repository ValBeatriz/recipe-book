import { deleteDishUseCase } from '../src/useCases';
import { PlatoRepository } from '../src/repositories';
import { validateUUID } from '../src/validate/uuid_validate';

// Mock de la función getById y delete de PlatoRepository
jest.mock('../src/repositories', () => ({
  PlatoRepository: {
    getById: jest.fn(),
    delete: jest.fn()
  }
}));

// Mock de validateUUID
jest.mock('../src/validate/uuid_validate', () => ({
  validateUUID: jest.fn(),
}));

describe('deleteDishUseCase', () => {
  it('should delete a dish', async () => {
    const id = 'a0579574-e1a0-441d-a60c-8ac8f16cddb3';

    (PlatoRepository.getById as jest.Mock).mockResolvedValueOnce(id);

    await deleteDishUseCase(id);

    expect(validateUUID).toHaveBeenCalledWith(id);
    expect(PlatoRepository.getById).toHaveBeenCalledWith(id);
    expect(PlatoRepository.delete).toHaveBeenCalledWith(id);
  });

});
