import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import Index from "../service";

export default async (fastify: FastifyInstance) => {
    fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        await req.jwtVerify();
        reply.status(200).send({
            data: await Index.welcome()
        });
    });
}