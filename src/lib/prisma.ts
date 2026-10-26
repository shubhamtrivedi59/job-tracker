import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// In dev, Next.js hot-reloads modules on every save. Without this, each reload
// would create a NEW client with new connections until Postgres runs out of them.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}