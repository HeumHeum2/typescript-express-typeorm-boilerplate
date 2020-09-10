import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = getRepository(User).create(req.body);
  console.log(newUser);
  const results = await getRepository(User).save(newUser);
  return res.json(results);
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).find();
  return res.send(user);
};
