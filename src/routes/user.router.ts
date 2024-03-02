import { Router } from "express";
import { addUserHandler, deleteUserHandler, getAllUser, getUserById, updateUserHandler } from "../controller/user.controller";

export const router = Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", addUserHandler);
router.delete("/:id", deleteUserHandler);
router.patch("/:id", updateUserHandler);