import { CreatePostInput } from "../../common/types/post.types";
import prisma from "../../config/prisma.config";

export const createPost = async (data: CreatePostInput) => {
    return prisma.post.create({
        data: {
            title: data.title,
            content: data.content,
            author: {
                connect: { id: data.authorId }
            },
            orderBy: {
                createdAt: "desc"
            }
        }
    })
}

export const getAllPosts = async (cursorId: number, page: number = 1, limit: number = 10, search?: string) => {
    let skip = (page - 1) * limit

    return prisma.post.findMany({
        where: search ? {
            published: true,
            title: {
                contains: search,
                mode: 'insensitive'
            }
        } : {},
        orderBy: {
            id: 'asc'
        },
        // take: limit,
        // skip,  ---> scans these many records to avoide use cursor based searching searches after the cursor point
        take: limit,
        cursor: {
            id: 5
        },
        skip: 1,
        select: {
            id: true,
            title: true,
            createdAt: true,
            author: {
                select: {
                    name: true
                }
            }
        },
        // include: {
        //     author: true,
        //     comments: true
        // }
    })
}

export const getPostById = async (id: number) => {
    return prisma.post.findUnique({
        where: { id },
        // include: {
        //     author: true,
        //     comments: true
        // }
        select: {
            title: true,
            author: {
                select: { name: true }
            },
            comments: {
                select: { text: true }
            }
        }
    })
}



export const updatePost = async (id: number, data: Partial<CreatePostInput>) => {
    return prisma.post.update({
        where: { id },
        data: data
    })
}

export const deletePost = async (id: number) => {
    return prisma.post.deleteMany({ where: { id } })
}