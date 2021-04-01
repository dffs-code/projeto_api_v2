const express = require('express');
const usuarios = require('./usuarios');
const professores = require('./professores');

module.exports = app => {
  app.use(
    express.json(),
    usuarios,
    professores
  )
}