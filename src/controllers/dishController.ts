
import { Request, Response } from 'express'
import { createDishUseCase, deleteDishUseCase, getAllDishUseCase, getByIdDishUseCase, updateDishUseCase } from '../useCases'
import { PlatoEntity } from '../entities';
import { ErrorModel } from './model/error';
import { PaginationModel } from './model/paginationModel';

export class DishController{
    constructor(
    ) {}

    createdish = (req: Request, res: Response) =>{
        const dish = new PlatoEntity(
            req.body.Name,
            req.body.Preparation,
            req.body.Ingredients,
            req.body.IdCategory,
        )
        createDishUseCase(dish)
            .then(dish => res.status(201).json())
            .catch(err => {
                if(err.message == 'Category not found') {
                    res.status(404).json(new ErrorModel(404, err.message))
                } else {
                    res.status(500).json(new ErrorModel(500, err.message))
                }
            });
    }

    getDishList = (req:Request, res: Response) =>{
        const size = req?.query?.size != null && req?.query?.size != '' ? req?.query?.size : 10
        const page = req?.query?.page != null && req?.query?.page != '' ? req?.query?.page : 1
        const search = req?.query?.search != null && req?.query?.search != '' ? req?.query?.search : ''
        const paging = new PaginationModel(size as number, page as number, search as string)
        getAllDishUseCase(paging)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(new ErrorModel(500, err.message)));
    }

    getDishById = (req:Request, res: Response) =>{
        getByIdDishUseCase(req.params.uuid)
            .then(dish => res.json(dish))
            .catch(err => {
                if(err.message == 'Recipe not found') {
                    res.status(404).json(new ErrorModel(404, err.message))
                } else {
                    res.status(500).json(new ErrorModel(500, err.message))
                }
            });
    }

    updateDish = (req:Request, res: Response) =>{

        const dish = new PlatoEntity(
            req.body.Name,
            req.body.Preparation,
            req.body.Ingredients,
            req.body.IdCategory,
        )
       
        updateDishUseCase(req.params.uuid, dish)
            .then(dish => res.status(204).json())
            .catch(err => {
                if(err.message == 'Recipe not found' || err.message == 'Category not found') {
                    res.status(404).json(new ErrorModel(404, err.message))
                } else {
                    res.status(500).json(new ErrorModel(500, err.message))
                }
            });
    }

    deleteDish = (req:Request, res: Response) =>{
       
        deleteDishUseCase(req.params.uuid)
            .then(dish => res.status(204).json())
            .catch(err => {
                if(err.message == 'Recipe not found') {
                    res.status(404).json(new ErrorModel(404, err.message))
                } else {
                    res.status(500).json(new ErrorModel(500, err.message))
                }
            });
    }

}