'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    
    static associate(models) {
      Professores.hasMany(models.Formacoes, {foreignKey: 'idProfessor'})
    }
  };
  Professores.init({
    idUsuario: DataTypes.INTEGER,
    sobre: DataTypes.TEXT,
    preco: DataTypes.DOUBLE,
    modalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};