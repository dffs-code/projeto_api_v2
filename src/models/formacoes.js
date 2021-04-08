'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formacoes extends Model {
    
    static associate(models) {
      Formacoes.belongsTo(models.Professores, { 
        foreignKey: 'id'
    })
    }
  };
  Formacoes.init({
    ProfessorId: DataTypes.INTEGER,
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