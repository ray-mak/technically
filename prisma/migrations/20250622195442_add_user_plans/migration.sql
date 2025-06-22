-- CreateEnum
CREATE TYPE "Plans" AS ENUM ('free', 'premium', 'pro');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" "Plans" NOT NULL DEFAULT 'free';
