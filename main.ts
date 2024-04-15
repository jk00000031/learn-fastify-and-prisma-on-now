import fastify from "fastify";
import fastifyAutoload from "@fastify/autoload";
import fastifyJwt from "@fastify/jwt";
import { join } from "path";


const server = fastify({
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
server.register(fastifyJwt, {
    secret: 'test'
});

/** GitHub: https://github.com/fastify/fastify-autoload */
server.register(fastifyAutoload, {
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