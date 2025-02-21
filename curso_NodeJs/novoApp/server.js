import { DatabaseMemory } from './database-memory.js';
import { fastify } from 'fastify';

const database = new DatabaseMemory();

const server = fastify();

server.get('/', (req, res) => {
    database.list();
})

server.post('/videos', (request, reply) => {
    database.create({
        title: 'video 01',
        description: 'Esse é o video 01',
        duration: '31 sgundos'
    });

    return reply.status(200).send();
})

server.put('/videos/:id', (req, res) => {
    return 'hello rocketseat';
})

server.delete('/videos/:id', (req, res) => {
    return 'hello rocketseat';
})


server.listen({
    port: 3333,
});

