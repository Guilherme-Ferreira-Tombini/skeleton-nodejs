var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores);
});

router.delete('/deletar', async function(req, res, next) {
const autores = await Autor.deletar(req.body);
  res.json(autores);
});

module.exports = router;
