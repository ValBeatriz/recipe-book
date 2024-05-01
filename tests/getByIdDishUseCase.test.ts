import { getByIdDishUseCase } from '../src/useCases';
import { PlatoRepository } from '../src/repositories';
import { RecipeDetailModel } from '../src/controllers/model/recipeDetailModel';

// Mock de la función getById de PlatoRepository
jest.mock('../src/repositories', () => ({
  PlatoRepository: {
    getById: jest.fn()
  }
}));

describe('getByIdDishUseCase', () => {
  it('should return recipe data by ID', async () => {
    const recipeId = 'e453ad7c-50df-48e1-ab6b-742d4a14ffd0';
    const mockRecipeData: RecipeDetailModel = {
      IdRecipe: recipeId,
      Name: 'Queque marmolado',
      IdCategory: '6abb353b-5f39-42c0-a62b-3ce2af8793b9',
      Category: 'Reposteria',
      Ingredients: '3 huevos, 2 tazas de azucar, 3 cucharadas de mantequilla, 2 tazas de leche, 4 de harina con polvos de hornear, 3 cucharadas de cacao en polvo.',
      Preparation: 'En un recipiente mezclar los huevos, mantequilla y azucar, batir hasta que sea una mezcla homogenea. Vertir la leche y la harina, alternando entre los dos mientras se sigue mezclando. en un recipiente apartar 10 cucharadas para mezclar con cacao. Finalmente vertir en un molde enmantequillado y meter al horno durante 50-60 min. Retirar del horno, esperar a que entibie y disfrutar. '
    };

    (PlatoRepository.getById as jest.Mock).mockResolvedValueOnce(mockRecipeData);

    const result = await getByIdDishUseCase(recipeId);

    expect(result).toEqual(mockRecipeData);
    expect(PlatoRepository.getById).toHaveBeenCalledWith(recipeId);
  });
});
