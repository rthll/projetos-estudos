const express = require('express');
const path = require('path');
const userRoutes = require('./routes/UserRoutes');

const PORT = 3000;
const server = express();

const basePath = path.join(__dirname, "views"); // Agora "views" é a pasta com os HTML

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Servir arquivos estáticos
server.use(express.static('public'));
server.use(express.static(basePath));

server.use('/user', userRoutes); // Rotas dos usuários

server.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
