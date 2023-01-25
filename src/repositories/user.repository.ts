import { User, UserEntity, UserResponse } from "../protocols/User.js";
import prisma from "../database/database.js";
import { PrismaPromise } from "@prisma/client";

export async function insertOne(user: User): Promise<Boolean> {
  try {
    await prisma.user.create({
      data: user,
    });

    return true;
  } catch (err) {
    return false;
  }
}

export function findAll(): PrismaPromise<UserResponse[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function deleteOne(idUser: number): Promise<Boolean> {
  try {
    await prisma.user.delete({
      where: {
        id: idUser,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}

export function findAllGames(idUser: number): PrismaPromise<AllGamesResponse> {
  return prisma.user.findFirst({
    where: {
      id: idUser,
    },
    select: {
      name: true,
      games: {
        select: {
          game: {
            select: {
              name: true,
              plataform: true,
            },
          },
          rating: true,
          acquired: true,
        },
      },
    },
  });
}

type AllGamesResponse = { name: String; games: Array<GameResponse> };
type GameResponse = { game: { name: String; plataform: String }; rating: number; acquired: Boolean };
