import { Router } from "express";
import { getUsers, createUser } from "../controller/user";

const router = Router();
router.get("/", getUsers);
router.post("/", createUser);

export default router;
