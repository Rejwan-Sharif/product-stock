import db from "../models/index.js";
const User = db.User;

const createUser = async (data) => await User.create(data);
const getAllUsers = async () => await User.findAll();
const getUserById = async (id) => await User.findByPk(id);
const updateUser = async (id, data) => await User.update(data, { where: { id } });
const deleteUser = async (id) => await User.destroy({ where: { id } });


export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

