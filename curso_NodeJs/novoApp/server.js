import { DatabaseMemory } from './database-memory.js';
import { fastify } from 'fastify';

const database = new DatabaseMemory();

const server = fastify();

server.get('/', (req, reply) => {
    return reply.status(200).send(database.list());
})

server.get('/videos/:title', (req, reply) => {
    const title = req.params.title;

    return reply.status(200).send(database.selectId(title));
})

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;
    database.create({
        title: title,
        description: description,
        duration: duration
    });
    return reply.status(200).send();
})

server.get('/videos', (req, reply) => {
    return reply.status(200).send(database.list());
})

server.put('/videos/:id', (req, reply) => {
    const videoId = req.params.id;
    const { title, description, duration } = req.body;

    const video = {
        title,
        description,
        duration
    };

    database.update(videoId, video);

    return reply.status(204).send();
})

server.delete('/videos/:id', (req, reply) => {
    const videoId = req.params.id;

    database.delete(videoId);

    return reply.status(204).send();
})


server.listen({
    port: 3333,
});

