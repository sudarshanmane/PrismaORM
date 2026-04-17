import { userRepository } from "./user.repository.js";
import { CreateUserInput } from "./user.type.js";

export const userService = {
    getUserById: async (id: number) => {
        if (!id) throw new Error("Invalid ID");
        return userRepository.getUserById(id);
    },

    createUserService: async (data: CreateUserInput) => {
        if (!data.email) {
            throw new Error("Email is required");
        }
        return userRepository.createUser(data);
    }
}