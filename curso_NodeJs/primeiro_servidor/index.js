const express = require('express');
const server = express();

const PORT = 3000;

server.listen(PORT);

server.get('/hello', (req, res) => {
    return res.json(
        {
            nome: "jose",
            idade: 20
        }
    );
});

console.log(`Server running on port ${PORT}`)