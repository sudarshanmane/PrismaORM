import { CreatePostInput } from "../../common/types/post.types";
import * as postRepo from "./post.repository";

export const createPostService = async (data: CreatePostInput) => {
    if (!data.title || !data.content) {
        throw new Error('Title and content are required!')
    }

    if (!data.authorId) {
        throw new Error('Author ID is required!')
    }

    const post = await postRepo.createPost(data)
    return post;
}

export const getAllPostService = async () => {
    
    return postRepo.
} 
