import prisma from "../prisma/client";

export default new class Index {
    async welcome () {
        return prisma.user.findMany();
    }
}