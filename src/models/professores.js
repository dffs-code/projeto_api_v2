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
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    sobre: DataTypes.TEXT,
    preco: DataTypes.DOUBLE,
    modalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};