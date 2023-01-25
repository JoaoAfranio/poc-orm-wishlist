import { countGenreByGames, createOrUpdateOne, findByGenreId, findById } from "../repositories/games.repository.js";
import { findAll } from "../repositories/genre.repository.js";
import { findAllGames } from "../repositories/user.repository.js";

export async function rateGame(idGame: number, idUser: number, rating: number) {
  const game = await findById(Number(idGame));

  if (!game) return false;

  const result = await createOrUpdateOne(idGame, idUser, rating);

  if (!result) return false;

  return true;
}

export async function wishlistedGamesUser(idUser: number) {
  const result = await findAllGames(Number(idUser));

  if (result === null) return [];

  const games = result.games.map((el) => {
    const game: GameWishlist = {
      name: el.game.name,
      plataform: el.game.plataform,
      rating: el.rating,
      acquired: el.acquired,
    };

    return game;
  });

  return { name: result.name, games };
}

export async function findGamesByGenreId(idGenre: number) {
  const result = await findByGenreId(Number(idGenre));
  const games = result.games.map((el) => el.name);

  result.games = games;
  return result;
}

type GameWishlist = { name: String; plataform: String; rating: Number; acquired: Boolean };

export async function countGamesByGenre() {
  const result = await countGenreByGames();
  const allGenre = await findAll();

  let hashGenre = {};

  for (let i = 0; i < allGenre.length; i++) {
    hashGenre[allGenre[i].id] = allGenre[i].type;
  }

  const genreCount = result.map((el) => {
    const count = {
      id: el.genreId,
      name: hashGenre[el.genreId],
      count: el._count.genreId,
    };

    return count;
  });

  return genreCount;
}
