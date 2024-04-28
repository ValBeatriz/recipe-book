
import { Request, Response } from 'express'
import { createDishUseCase, deleteDishUseCase, getAllDishUseCase, getByIdDishUseCase, updateDishUseCase } from '../useCases'
import { PlatoEntity } from '../entities';

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
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    getDishList = (req:Request, res: Response) =>{
       
        getAllDishUseCase()
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    getDishById = (req:Request, res: Response) =>{
        getByIdDishUseCase(req.params.uuid)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    updateDish = (req:Request, res: Response) =>{

        const dish = new PlatoEntity(
            req.body.Name,
            req.body.Preparation,
            req.body.Ingredients,
            req.body.IdCategory,
        )
       
        updateDishUseCase(req.params.uuid, dish)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    deleteDish = (req:Request, res: Response) =>{
       
        deleteDishUseCase(req.params.uuid)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

}