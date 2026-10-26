import { prisma } from '@/lib/prisma';

export function getApplications() {
    return prisma.application.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export function getApplicationById(id: string) {
    return prisma.application.findUnique({
        where: { id },
    });
}
