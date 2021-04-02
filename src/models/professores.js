'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    
    static associate(models) {
      Professores.belongsTo(models.Usuarios)
      Professores.hasMany(models.Formacoes, {foreignKey: 'ProfessorId'})
      Professsores.belongsToMany(models.Aulas, {foreignKey: 'ProfessorId'})
    }
  };
  Professores.init({
    UsuarioId: DataTypes.INTEGER,
    sobre: DataTypes.TEXT,
    preco: DataTypes.DOUBLE,
    modalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};