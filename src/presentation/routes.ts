import { Router } from "express";
import { DishRoutes } from "../routes/dishRoutes";
import { CategoryRoutes } from "../routes/categoryRoutes";
const cors = require("cors");

export class AppRoutes{
    static get routes(): Router {
        const router = Router();

        router.use(cors());
        router.use('/api/v1/recipe', DishRoutes.routes);
        router.use('/api/v1/category', CategoryRoutes.routes);

        return router;
    }
}