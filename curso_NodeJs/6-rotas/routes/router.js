const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/form', (req, res) => {
  res.sendFile(path.resolve(basePath, "userForm.html"));
  })
  
  router.post('/save', (req, res) => {
    console.log(req.body);
  
  })
  
  router.get('/:id', (req, res) => {
    const id = req.params.id;
  
    console.log(`Estamos buscando pelo usuário ${id}`);
  })

  module.exports = router;