const express = require('express');
const usuarios = require('./usuarios');

module.exports = app => {
  app.use(
    express.json(),
    usuarios
  )
}