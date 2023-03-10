/*
  Warnings:

  - You are about to drop the column `acquired` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Game` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "acquired",
DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UsersOnGames" ADD COLUMN     "acquired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rating" INTEGER;
