const express = require('express');
const usuarios = require('./usuarios');
const professores = require('./professores');
const alunos = require('./alunos');

module.exports = app => {
  app.use(
    express.json(),
    usuarios,
    professores,
    alunos
  )
}