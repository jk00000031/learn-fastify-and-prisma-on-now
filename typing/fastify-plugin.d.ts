// fastify-plugin.d.ts

import {env} from "../utils/env";

declare module 'fastify' {
    interface FastifyRequest {
        getEnvValue: typeof env;
    }
}