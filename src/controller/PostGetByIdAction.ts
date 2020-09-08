import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Post } from "../entity/Post";

// Loads post by a given id.

export async function postGetByIdAction(request: Request, response: Response) {
  const postRespository = getManager().getRepository(Post);

  const post = await postRespository.findOne(request.params.id);

  // if post was not found return 404 to the client
  if (!post) {
    response.status(404);
    response.end();
    return;
  }

  response.send(post);
}
