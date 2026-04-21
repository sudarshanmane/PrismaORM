import { PrismaClient } from '@prisma/client/extension';
import prisma from '../../config/prisma.config';

export const getAllComments = async (cursorId: number, page: number, limit: number, search?: string) => {
    return prisma.comments.findMany({
        where: {
            text: {
                contains: search,
                mode: 'insensitive'
            }
        },
        cursor: {
            id: 20
        },
        skip: 1,
        take: 5,
        orderBy: {
            id: 'asc'
        }
    })
}

export const transactions = async () => {

    await prisma.$transaction(async (tx: PrismaClient) => {
        await tx.comments.create({ data: {} })
        await tx.post.update({ data: {} })
    })

}