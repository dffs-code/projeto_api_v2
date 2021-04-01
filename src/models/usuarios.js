'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Professores);
      //Usuarios.hasMany(models.Alunos);
    }
  };
  Usuarios.init({
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    isProfessor: DataTypes.BOOLEAN,
    isAtivo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};