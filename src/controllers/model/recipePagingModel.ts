import { RecipeBasicModel } from "./recipeBasicModel";

export class RecipePagingModel {
    constructor(
     public TotalPages: number,
     public PageSize: number,
     public CurrentPage: number,
     public TotalCount: number,
     public Items: RecipeBasicModel[],
    ) {}
}