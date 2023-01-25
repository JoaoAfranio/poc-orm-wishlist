import { Request, Response } from "express";
import { Game } from "../protocols/Game";
import { findAll, insertOne, deleteOne } from "../repositories/games.repository.js";
import { countGamesByGenre, findGamesByGenreId, rateGame } from "../services/games.service.js";

export async function insertGame(req: Request, res: Response) {
  const game = req.body as Game;

  try {
    const result = await insertOne(game);
    if (!result) return res.sendStatus(400);

    res.send(`Game created successfully`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllGames(req: Request, res: Response) {
  const result = await findAll();
  res.send(result);
}

export async function deleteById(req: Request, res: Response) {
  const id = req.params.id;

  if (!id) return res.sendStatus(400);

  try {
    const result = await deleteOne(Number(id));
    if (!result) return res.sendStatus(404);

    res.send(`Game deleted successfully`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateById(req: Request, res: Response) {
  const idGame = req.params.id;
  const { rating, idUser } = req.body as RatingRequest;

  try {
    const result = await rateGame(Number(idGame), Number(idUser), Number(rating));

    if (!result) return res.sendStatus(400);

    res.send(`Updated game successfully`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

type RatingRequest = { rating: Number; idUser: Number };

export async function countGamesGenre(req: Request, res: Response) {
  try {
    const result = await countGamesByGenre();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findGamesByGenre(req: Request, res: Response) {
  const id = req.params.id;

  if (!id) return res.sendStatus(400);

  try {
    const result = await findGamesByGenreId(Number(id));
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
