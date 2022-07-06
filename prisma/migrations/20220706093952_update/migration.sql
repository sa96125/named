/*
  Warnings:

  - You are about to drop the `PlatfomesOnCelebrities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnCelebrities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlatfomesOnCelebrities" DROP CONSTRAINT "PlatfomesOnCelebrities_celebrityId_fkey";

-- DropForeignKey
ALTER TABLE "PlatfomesOnCelebrities" DROP CONSTRAINT "PlatfomesOnCelebrities_platformId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnCelebrities" DROP CONSTRAINT "TagsOnCelebrities_celebrityId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnCelebrities" DROP CONSTRAINT "TagsOnCelebrities_tagId_fkey";

-- DropTable
DROP TABLE "PlatfomesOnCelebrities";

-- DropTable
DROP TABLE "TagsOnCelebrities";

-- CreateTable
CREATE TABLE "_CelebrityToPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CelebrityToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CelebrityToPlatform_AB_unique" ON "_CelebrityToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_CelebrityToPlatform_B_index" ON "_CelebrityToPlatform"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CelebrityToTag_AB_unique" ON "_CelebrityToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CelebrityToTag_B_index" ON "_CelebrityToTag"("B");

-- AddForeignKey
ALTER TABLE "_CelebrityToPlatform" ADD CONSTRAINT "_CelebrityToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Celebrity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToPlatform" ADD CONSTRAINT "_CelebrityToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToTag" ADD CONSTRAINT "_CelebrityToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Celebrity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToTag" ADD CONSTRAINT "_CelebrityToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
