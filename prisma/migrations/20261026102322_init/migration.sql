-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SAVED', 'APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER', 'REJECTED');

-- CreateEnum
CREATE TYPE "Permit" AS ENUM ('UNKNOWN', 'YES', 'NO');

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "jobUrl" TEXT,
    "status" "Status" NOT NULL DEFAULT 'SAVED',
    "appliedAt" TIMESTAMP(3),
    "salaryRange" TEXT,
    "recruiterName" TEXT,
    "emailUsed" TEXT,
    "permitSupport" "Permit" NOT NULL DEFAULT 'UNKNOWN',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
