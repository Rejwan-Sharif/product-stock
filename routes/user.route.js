import express from "express";
import * as userController from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:id", userController.findById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
