import { Router } from "express";
import { postGetAllAction } from "../controller/PostGetAllAction";

export const postRouter = Router();

postRouter.get("/", postGetAllAction);

// userRouter.post("/signup", usersController.PostSignupAction);
