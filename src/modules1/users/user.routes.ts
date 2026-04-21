import express from "express";
import { getUser } from "./user.controller";

const userRoutes = express.Router();
userRoutes.get("/:id", getUser);

export default userRoutes;