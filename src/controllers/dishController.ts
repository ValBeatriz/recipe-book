import { UUID } from 'crypto';
import {Request,Response} from 'express'

import {PlatoRepository} from '../repositories'
import { PlatoEntity } from '../entities';
const { v4: uuidv4, validate } = require('uuid');

export class dishController{
    constructor(
        private readonly platoRepository: PlatoRepository
    ){}

    createdish = (req:Request, res: Response) =>{
        const dish = new PlatoEntity(
            req.body.Name,
            req.body.Preparation,
            req.body.Ingredients,
            req.body.IdCategory,
        )
        this.platoRepository.create(dish)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    getDishList = (req:Request, res: Response) =>{
       
        this.platoRepository.getAll()
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    getDishById = (req:Request, res: Response) =>{
       
        const uuid = uuidv4(req.params.uuid);
        this.platoRepository.getById(uuid)
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
       
        const uuid = uuidv4(req.params.uuid);
        this.platoRepository.update(uuid, dish)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

    deleteDish = (req:Request, res: Response) =>{
       
        const uuid = uuidv4(req.params.uuid);
        this.platoRepository.delete(uuid)
            .then(dish => res.json(dish))
            .catch(err => res.status(500).json(err));
    }

}