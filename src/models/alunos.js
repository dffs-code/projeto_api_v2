'use strict';
const {
    Model
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    
    class Alunos extends Model {
    
        static associate(models) {
          Alunos.belongsTo(models.Usuarios)
        }
      };
      Alunos.init({
        UsuarioId: DataTypes.INTEGER,
        interesses: DataTypes.TEXT,
      }, {
        sequelize,
        modelName: 'Alunos',
      });
      return Alunos;
};