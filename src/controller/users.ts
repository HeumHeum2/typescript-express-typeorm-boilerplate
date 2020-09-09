import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { User } from "../entity/User";

export async function PostSignupAction(request: Request, response: Response) {
  const userRespository = getConnection().getRepository(User);

  const user = await userRespository.save(request.body);

  // if post was not found return 404 to the client

  response.send(user);
}

export async function userGetAllAction(request: Request, response: Response) {
  const userRespository = getConnection().getRepository(User);

  const user = await userRespository.find();
  // if post was not found return 404 to the client

  response.send(user);
}
