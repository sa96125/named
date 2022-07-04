-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Article" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" BOOLEAN NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("uid")
);
