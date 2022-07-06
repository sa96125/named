-- CreateTable
CREATE TABLE "Name" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbnail" TEXT,
    "name" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platfomes" TEXT[],

    CONSTRAINT "Name_pkey" PRIMARY KEY ("uid")
);
