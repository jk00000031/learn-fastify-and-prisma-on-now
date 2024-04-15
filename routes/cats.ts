import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

export default async (fastify: FastifyInstance) => {
    fastify.get('/test', async (req: FastifyRequest, res: FastifyReply) => {
        res.send('111')
    })
}