import { Router } from "express";
import { CategoryController } from "../controllers";

export class CategoryRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new CategoryController();

        router.get('/', controller.getDishList);
        router.get('/:uuid', controller.getDishById);

        return router;
    }
}