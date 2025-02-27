const express = require("express");
const path = require("path");
const server = express();
const PORT = 3000;

const basePath = path.join(__dirname, "templates");

const router = require('./routes/router');

/*
middleware
const checkAuth = function(req, res, next) {
  req.authStatus = true;

  if(req.authStatus) {
    console.log('Logado!');
    next();
  } else {
    console.log('Não esta logado!');
    next();
  }
}

server.use(checkAuth);
*/

server.use(
  express.urlencoded({
    extended: true,
  }),
)

server.use(express.json());

server.use(express.static('public'));

server.use('/routes', router);

server.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});