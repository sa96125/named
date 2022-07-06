/*
  Warnings:

  - You are about to drop the `Name` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Name";

-- CreateTable
CREATE TABLE "Celebrity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbnail" TEXT,
    "name" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Celebrity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlatfomesOnCelebrities" (
    "celebrityId" INTEGER NOT NULL,
    "platformId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "PlatfomesOnCelebrities_pkey" PRIMARY KEY ("celebrityId","platformId")
);

-- CreateTable
CREATE TABLE "TagsOnCelebrities" (
    "celebrityId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TagsOnCelebrities_pkey" PRIMARY KEY ("celebrityId","tagId")
);

-- AddForeignKey
ALTER TABLE "PlatfomesOnCelebrities" ADD CONSTRAINT "PlatfomesOnCelebrities_celebrityId_fkey" FOREIGN KEY ("celebrityId") REFERENCES "Celebrity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlatfomesOnCelebrities" ADD CONSTRAINT "PlatfomesOnCelebrities_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnCelebrities" ADD CONSTRAINT "TagsOnCelebrities_celebrityId_fkey" FOREIGN KEY ("celebrityId") REFERENCES "Celebrity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnCelebrities" ADD CONSTRAINT "TagsOnCelebrities_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
