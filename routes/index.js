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

router.get('/atualizar', async function(req, res, next) {

  const atualiza = {
    nome: "luquinhas",
    sobrenome: "da Silva",
    data_de_nascimento: "2099/08/03",
    id: "9"
  }
  
  const autores = await Autor.atualizar(atualiza);
  res.json(autores);
});

module.exports = router;
