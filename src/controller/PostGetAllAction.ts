import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Post } from "../entity/Post";
import { Photo } from "../entity/Photo";

// Loads all posts from the database.

export async function postGetAllAction(request: Request, response: Response) {
  console.log(getConnection().getRepository(Photo));
  // get a post respository to perform operations with post
  // const postRepository = getManager().getRepository(Post);

  // load a post by a given post id
  // const posts = await postRepository.find();

  // return loaded posts
  // response.send(posts);
}
