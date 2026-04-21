import { Request, Response } from "express";
import { userService } from './user.service';
import { AuthRequest } from "../../common/types/types";

export const getUser = async (req: AuthRequest, res: Response) => {
    let id = req.params.id
    const data = await userService.getUserById(Number(req.params.id));
    res.json(data);
};

export const createUser = async (req: AuthRequest, res: Response) => {

    let { email, name } = req.body;
    const data = await userService.createUserService({ email, name })
}