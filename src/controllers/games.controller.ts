import { Request, Response } from "express";
import { Game } from "../protocols/Game";
import { countGenreByGames, deleteOne, findAll, findById, insertOne, updateOne } from "../repositories/games.repository.js";
import { GameSchema } from "../schemas/game.schema.js";

export async function insertGame(req: Request, res: Response) {
  const game = req.body as Game;

  try {
    const { error } = GameSchema.validate(game);

    if (error) return res.send({ message: error.message }).status(401);

    const result = await insertOne(game);
    res.send(`Inserted ${result.rowCount} games`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllGames(req: Request, res: Response) {
  const result = await findAll();
  res.send(result.rows);
}

export async function deleteById(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const result = await deleteOne(Number(id));
    res.send(`Deleted ${result.rowCount} games`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateById(req: Request, res: Response) {
  const id = req.params.id;
  const { rating } = req.body;

  try {
    const game = await findById(Number(id));

    if (game.rowCount === 0) return res.sendStatus(404);

    const result = await updateOne(Number(id), Number(rating));
    res.send(`Updated ${result.rowCount} games`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function countGamesGenre(req: Request, res: Response) {
  try {
    const result = await countGenreByGames();
    res.send(result.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
