import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient();
const prisma = new PrismaClient();

export function getAll() {
  return prisma.experience.findMany({});
}

export { prisma };
