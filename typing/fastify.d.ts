import { FastifyJWT } from "@fastify/jwt";

declare module 'fastify' {
    export interface FastifyInstance {
        jwt: FastifyJWT
    }
}