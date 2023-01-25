/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Genre_type_key" ON "Genre"("type");
