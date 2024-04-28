import { Router } from "express";
import { DishController } from "../controllers";

export class DishRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new DishController();

        router.post('/', controller.createdish);
        router.put('/:uuid', controller.updateDish);
        router.delete('/:uuid', controller.deleteDish);
        router.get('/', controller.getDishList);
        router.get('/:uuid', controller.getDishById);

        return router;
    }
}