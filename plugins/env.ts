import {FastifyInstance, FastifyPluginOptions} from "fastify";
import fp from 'fastify-plugin'
import {env} from "../utils/env";

async function decorateEnv(fastify: FastifyInstance, opts: FastifyPluginOptions) {
    fastify.decorateRequest('getEnvValue', env);
}

export default fp(decorateEnv)