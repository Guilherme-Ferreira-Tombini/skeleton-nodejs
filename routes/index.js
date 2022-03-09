var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/inserir', async function(req, res, next) {

  const autor = {
    nome: "luiz",
    sobrenome: "picolo",
    data_de_nascimento: "2005/10/08"

  }

  const autores = await Autor.inserir(autor);
  res.json(autores);
});

module.exports = router;
