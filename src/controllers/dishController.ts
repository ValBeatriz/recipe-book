
import { Request, Response } from 'express'
import { createDishUseCase, deleteDishUseCase, getAllDishUseCase, getByIdDishUseCase, updateDishUseCase } from '../useCases'
import { PlatoEntity } from '../entities';
import { recipeRequestToEntityMapper } from '../mapper';
import { paginationRequestToModelMapper } from '../mapper/paginationMapper';

export class DishController{
    constructor(
    ) {}

    createdish = async (req: Request, res: Response) =>{
        const dish: PlatoEntity = await recipeRequestToEntityMapper(req.body);
        createDishUseCase(dish)
            .then(dish => res.status(201).json())
            .catch(err =>  res.status(err.CodeError).json(err));
    }

    getDishList = async (req:Request, res: Response) =>{
        
        const paging = await paginationRequestToModelMapper(req);

        getAllDishUseCase(paging)
            .then(dish => res.json(dish))
            .catch(err =>  res.status(err.CodeError).json(err));
    }

    getDishById = (req:Request, res: Response) =>{
        getByIdDishUseCase(req.params.uuid)
            .then(dish => res.json(dish))
            .catch(err =>  res.status(err.CodeError).json(err));
    }

    updateDish = async (req:Request, res: Response) =>{

        const dish: PlatoEntity = await recipeRequestToEntityMapper(req.body);
       
        updateDishUseCase(req.params.uuid, dish)
            .then(dish => res.status(204).json())
            .catch(err =>  res.status(err.CodeError).json(err));
    }

    deleteDish = (req:Request, res: Response) =>{
       
        deleteDishUseCase(req.params.uuid)
            .then(dish => res.status(204).json())
            .catch(err =>  res.status(err.CodeError).json(err));
    }

}