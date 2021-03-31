'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materias extends Model {
    static associate(models) {
    }
  };
  materias.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'materias',
  });
  return materias;
};