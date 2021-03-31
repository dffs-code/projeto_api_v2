'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Formacoes.init({
    idProfessor: DataTypes.INTEGER,
    nivel: DataTypes.STRING,
    curso: DataTypes.STRING,
    instituicao: DataTypes.STRING,
    ano: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Formacoes',
  });
  return Formacoes;
};