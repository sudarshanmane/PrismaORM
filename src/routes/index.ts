import { Router } from "express";
import userRoutes from "../modules/users/user.routes";

export const setupRoutes = () => {
    const router = Router();
    router.use("/users", userRoutes);
    return router;
};