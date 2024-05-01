
import { Request, Response } from 'express'
import { getAllCategoriesUseCase, getByIdCategoryUseCase } from '../useCases'

export class CategoryController{
    constructor(
    ) {}

    getDishList = (req:Request, res: Response) =>{
        getAllCategoriesUseCase()
            .then(categories => res.json(categories))
            .catch(err =>  res.status(err.CodeError).json(err));
    }

    getDishById = (req:Request, res: Response) =>{
        getByIdCategoryUseCase(req.params.uuid)
            .then(category => res.json(category))
            .catch(err =>  res.status(err.CodeError).json(err));
    }

}