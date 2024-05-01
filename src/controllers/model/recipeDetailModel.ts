import { RecipeBasicModel } from "./recipeBasicModel";

export class RecipeDetailModel extends RecipeBasicModel {
    constructor(
     public IdRecipe: string,
     public Name: string,
     public IdCategory: string,
     public Category: string,
     public Ingredients: string,
     public Preparation: string,
    ) {
        super(IdRecipe, Name, IdCategory, Category);
    }
}