import { Request, Response } from "express";
import { User } from "../protocols/User";

import { deleteOne, findAll, insertOne } from "../repositories/user.repository.js";
import { wishlistedGamesUser } from "../services/games.service.js";

export async function insertUser(req: Request, res: Response) {
  const user = req.body as User;

  try {
    const result = await insertOne(user);
    if (!result) return res.sendStatus(400);

    res.send(`User created successfully`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllUsers(req: Request, res: Response) {
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

    return res.send("User deleted successfully").status(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function findAllGamesWishlist(req: Request, res: Response) {
  const id = req.params.id;

  if (!id) return res.sendStatus(400);

  try {
    const result = await wishlistedGamesUser(Number(id));

    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
