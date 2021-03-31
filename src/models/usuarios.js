'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
    }
  };
  usuarios.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    isProfessor: DataTypes.BOOLEAN,
    isAtivo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};