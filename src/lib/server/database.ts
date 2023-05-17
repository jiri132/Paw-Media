import { PrismaClient } from '@prisma/client'

const db : PrismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Enable query logging
  })

export default db
