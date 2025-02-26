const express = require("express");
const path = require("path");
const server = express();
const PORT = 3000;

const basePath = path.join(__dirname, "templates");

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

server.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.get('/users/form', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
})

server.post('/users/save', (req, res) => {
  console.log(req.body);

})

server.get('/users/:id', (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo usuário ${id}`);
})

server.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});