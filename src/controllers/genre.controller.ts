import { Request, Response } from "express";
import { Genre } from "../protocols/Genre";

import { deleteOne, findAll, insertOne } from "../repositories/genre.repository.js";

export async function insertGenre(req: Request, res: Response) {
  const genre = req.body as Genre;

  try {
    const result = await insertOne(genre);
    if (!result) return res.sendStatus(400);

    res.send(`Genre created successfully`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllGenres(req: Request, res: Response) {
  try {
    const result = await findAll();

    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteById(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const result = await deleteOne(Number(id));
    if (!result) return res.sendStatus(404);

    return res.send("Genre deleted successfully").status(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
