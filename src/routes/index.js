const express = require('express');
const usuarios = require('./usuarios');
const professores = require('./professores');
const alunos = require('./alunos');
const materias = require('./materias');
const formacoes = require('./formacoes');
const aulas = require('./aulas');

module.exports = app => {
  app.use(
    express.json(),
    professores,
    alunos,
    usuarios,
    materias,
    formacoes,
    aulas
  )
}