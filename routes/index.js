var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");
const Livro = require("../models/livro");
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

router.get('/livros', async function(req, res, next) {
  const autores = await Autor.livros(req.body);
  res.json(autores.rows);
});

router.get('/livros-mostrar', async function(req, res, next) {
  const livros = await Livro.selecionar_();
  res.json(livros.rows);
});

router.post('/inserir1', async function(req, res, next) {
  const livros = await Livro.inserir_(req.body);
  res.json(livros);
});

router.put('/atualizar1', async function(req, res, next) {
  const livros = await Livro.atualizar_(req.body);
  res.json(livros);
});

router.delete('/deletar1', async function(req, res, next) {
const livros = await Livro.deletar_(req.body);
  res.json(livros);
});


module.exports = router;
