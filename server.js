import fastify from "fastify";

const PORT = process.env.PORT;

const server = fastify();

server.get("/", (request, reply) => {
  reply.send({ message: "Hello World!" });
});

server.listen({ port: PORT });
