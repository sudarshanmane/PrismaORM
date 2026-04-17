import prisma from '../config/prisma.config';
import { CreateUserInput } from './user.type';

export const userRepository = {
    createUser: async (data: CreateUserInput) => {
        return prisma.user.create({
            data
        });
    },
    getUserById: async (id: number) => {
        return prisma.user.findUnique({
            where: { id }
        });
    }
}
