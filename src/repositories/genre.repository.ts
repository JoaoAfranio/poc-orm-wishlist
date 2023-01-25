import { Genre, GenreEntity } from "../protocols/Genre.js";
import prisma from "../database/database.js";
import { PrismaPromise } from "@prisma/client";

export async function insertOne(genre: Genre): Promise<Boolean> {
  try {
    await prisma.genre.create({
      data: genre,
    });

    return true;
  } catch (err) {
    return false;
  }
}

export function findAll(): PrismaPromise<GenreEntity[]> {
  return prisma.genre.findMany();
}

export async function deleteOne(idGenre: number): Promise<Boolean> {
  try {
    await prisma.genre.delete({
      where: {
        id: idGenre,
      },
    });

    return true;
  } catch (err) {
    return false;
  }
}
