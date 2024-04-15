import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(process.env.NODE_ENV === 'development' ? {
    log: ['query']
} : undefined);

export default prisma;