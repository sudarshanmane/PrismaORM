-- CreateTable
CREATE TABLE "User1" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile1" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User2" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile2" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Profile2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Profile2ToUser2" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Profile2ToUser2_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User1_email_key" ON "User1"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile1_userId_key" ON "Profile1"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User2_email_key" ON "User2"("email");

-- CreateIndex
CREATE INDEX "_Profile2ToUser2_B_index" ON "_Profile2ToUser2"("B");

-- AddForeignKey
ALTER TABLE "Profile1" ADD CONSTRAINT "Profile1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Profile2ToUser2" ADD CONSTRAINT "_Profile2ToUser2_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile2"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Profile2ToUser2" ADD CONSTRAINT "_Profile2ToUser2_B_fkey" FOREIGN KEY ("B") REFERENCES "User2"("id") ON DELETE CASCADE ON UPDATE CASCADE;
