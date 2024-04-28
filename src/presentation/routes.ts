import { Router } from "express";
import { DishRoutes } from "../routes/dishRoutes";
const cors = require("cors");

export class AppRoutes{
    static get routes(): Router {
        const router = Router();

        router.use(cors());
        router.use('/api/v1/recipe', DishRoutes.routes);

        return router;
    }
}