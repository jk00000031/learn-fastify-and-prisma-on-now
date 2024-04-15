import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

export default async (fastify: FastifyInstance) => {
    fastify.post('/account/login', async (req: FastifyRequest, reply: FastifyReply) => {
        const signOptions = {
            test: 1
        };
        fastify.jwt.sign(signOptions, { expiresIn: 1 * 60 * 60 * 1000 });
        const token = await reply.jwtSign(signOptions, { expiresIn: 1 * 60 * 60 * 1000 })
        reply.status(200).send({ token: token })
    });
}