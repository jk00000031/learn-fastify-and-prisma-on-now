import Fastify from "fastify";
import FastifyAutoload from "@fastify/autoload";
import FastifyJwt from "@fastify/jwt";
import {join} from "path";
import {env} from "./utils/env";
import decorateEnv from './plugins/env'


const server = Fastify({
    logger: {
        level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
        timestamp: process.env.NODE_ENV !== 'development'
    }
});

/**
 * GitHub: https://github.com/fastify/fastify-jwt
 *
 * 登录后请求头加上相应参数
 * headers: { Authorization: "Bearer [Your Token]" }
 */
server.register(FastifyJwt, {
    secret: env('JWT_SECRET') as string
});

/** GitHub: https://github.com/fastify/fastify-autoload */
server.register(decorateEnv)
// server.register(FastifyAutoload, {
//     dir: join(__dirname, 'plugins'),
//     ignorePattern: /(^.*(?:test|spec){.js|.ts})$/,
// });

server.register(FastifyAutoload, {
    dir: join(__dirname, 'routes'),
    ignorePattern: /(^.*(?:test|spec){.js|.ts})$/,
    routeParams: true,
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server started on ${address}`);
});