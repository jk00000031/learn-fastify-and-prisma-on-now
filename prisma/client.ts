import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(process.env.NODE_ENV === 'development' ? {
    log: ['query', 'warn', 'error', 'info']
} : undefined);

export default prisma;