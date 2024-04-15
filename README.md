# Test Job 1

## Files Autoload

该插件如果想直接引入文件，那么被自动引入的地方不要出现 `index` 命名的文件。  
如果必须要出现，请在 `index` 里面再手动引入该文件夹下其他文件，否则其他文件会被过滤掉。

## Validate Logon

项目采用了 `@fastify/jwt` 作为登录验证
在 `fastify` 注册后可通过相关函数写入及生成 `token`
```javascript
// main.ts
fastify.register(FastifyJWT, { secret: 'your secret' })

// login
fastify.post('/login', async (request, reply) => {
    const options = {
        id: 1,
        name: 'Example'
    }
    // 将信息挂载到 reply
    fastify.jwt.sign(options, { expiresIn: 60 * 1000 });
    // 生成 token
    // 生成 token 的 options 不一定要和挂载的一样，只需要将关键关联字段放上去即可，避免敏感信息泄露
    const token = await reply.jwtSign(options, { expiresIn: 60 * 1000 });
    reply.status(200).send({
        token
    })
})
```

## ORM - Prisma

prisma 客户端生成指令
```shell
pnpx prisma generate
```

数据模型更新指令
```shell
pnpx prisma migrate
```