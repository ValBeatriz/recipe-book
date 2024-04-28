import { Router } from "express";
import { DishRoutes } from "../routes/dishRoutes";

export class AppRoutes{
    static get routes(): Router {
        const router = Router();

        router.use('/api/v1/recipe', DishRoutes.routes);

        return router;
    }
}