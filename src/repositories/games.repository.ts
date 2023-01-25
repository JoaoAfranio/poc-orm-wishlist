import { Game, GameEntity } from "../protocols/Game.js";
import prisma from "../database/database.js";
import { PrismaPromise } from "@prisma/client";

export async function insertOne(game: Game): Promise<Boolean> {
  try {
    await prisma.game.create({
      data: game,
    });

    return true;
  } catch (err) {
    return false;
  }
}

export function findAll(): PrismaPromise<GameEntity[]> {
  return prisma.game.findMany();
}

export function findById(idGame: number): PrismaPromise<GameEntity> {
  return prisma.game.findUnique({
    where: {
      id: idGame,
    },
  });
}

export function findByGenreId(idGenre: number): PrismaPromise<any> {
  return prisma.genre.findFirst({
    where: {
      id: idGenre,
    },
    select: {
      type: true,
      games: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function deleteOne(idGame: number): Promise<Boolean> {
  try {
    await prisma.game.delete({
      where: {
        id: idGame,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}

export async function createOrUpdateOne(gameId: number, userId: number, rating: number): Promise<Boolean> {
  try {
    await prisma.usersOnGames.upsert({
      where: {
        userId_gameId: { userId, gameId } || { userId: 0, gameId: 0 },
      },
      create: {
        userId,
        gameId,
        rating: rating || null,
        acquired: true,
      },
      update: {
        rating: rating || null,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export function countGenreByGames() {
  return prisma.game.groupBy({
    by: ["genreId"],
    _count: {
      genreId: true,
    },
  });
}
