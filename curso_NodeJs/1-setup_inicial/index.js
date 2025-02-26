const express = require("express");
const ath = require("path");
const server = express();
const PORT = 3000;

const basePath = path.join(__dirname, "templates");

server.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
