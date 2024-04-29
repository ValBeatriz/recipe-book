
import { Request, Response } from 'express'
import { getAllCategoriesUseCase, getByIdCategoryUseCase } from '../useCases'
import { ErrorModel } from './model/error';

export class CategoryController{
    constructor(
    ) {}

    
    getDishList = (req:Request, res: Response) =>{
        getAllCategoriesUseCase()
            .then(categories => res.json(categories))
            .catch(err => res.status(500).json(new ErrorModel(500, err.message)));
    }

    getDishById = (req:Request, res: Response) =>{
        getByIdCategoryUseCase(req.params.uuid)
            .then(category => res.json(category))
            .catch(err => {
                if(err.message == 'Category not found') {
                    res.status(404).json(new ErrorModel(404, err.message))
                } else {
                    res.status(500).json(new ErrorModel(500, err.message))
                }
            });
    }

}