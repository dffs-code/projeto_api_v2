const express = require('express');
const usuarios = require('./usuarios');
const professores = require('./professores');
const alunos = require('./alunos');
const materias = require('./materias');

module.exports = app => {
  app.use(
    express.json(),
    usuarios,
    professores,
    alunos,
    materias
  )
}