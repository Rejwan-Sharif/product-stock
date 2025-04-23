import * as userRepo from "../repositories/user.repositories.js";

export const create = async(data) => await userRepo.createUser(data);
export const findAll = async() => await userRepo.getAllUsers();
export const findById = async(id) => await userRepo.getUserById(id);
export const update = async(id, data) => await userRepo.updateUser(id,data);
export const remove = async(id) => await userRepo.deleteUser(id);

