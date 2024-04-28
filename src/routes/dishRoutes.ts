import { Router } from "express";
import { DishController } from "../controllers";
import { PlatoRepository } from "../repositories";

export class DishRoutes{
    static get routes(): Router{
        const router = Router();
        const repo = new PlatoRepository;
        const controller = new DishController(repo);

        router.post('/', controller.createdish);
        router.put('/:uuid', controller.updateDish);
        router.delete('/:uuid', controller.deleteDish);
        router.get('/', controller.getDishList);
        router.get('/:uuid', controller.getDishById);

        return router;
    }
}