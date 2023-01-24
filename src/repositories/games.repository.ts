import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Game, GameEntity } from "../protocols/Game.js";

export function insertOne(game: Game): Promise<QueryResult> {
  return connection.query("INSERT INTO games (name, plataform, genre) values ($1, $2, $3)", [game.name, game.plataform, game.genre]);
}

export function findAll(): Promise<QueryResult<GameEntity>> {
  return connection.query("SELECT * FROM games");
}

export function findById(idGame: number): Promise<QueryResult<GameEntity>> {
  return connection.query("SELECT * FROM games WHERE id = $1", [idGame]);
}

export function deleteOne(idGame: number): Promise<QueryResult> {
  return connection.query("DELETE FROM games WHERE id = $1", [idGame]);
}

export function updateOne(idGame: number, rating: number): Promise<QueryResult> {
  return connection.query("UPDATE games SET rating = $1, acquired = true WHERE id = $2", [rating, idGame]);
}

export function countGenreByGames(): Promise<QueryResult> {
  return connection.query("SELECT games.genre, count(*) FROM games GROUP BY games.genre");
}
