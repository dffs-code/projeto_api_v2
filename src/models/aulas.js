'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aulas extends Model {
    static associate(models) {
      Aulas.hasMany(models.Professores, { foreignKey: 'id' })
      Aulas.hasMany(models.Alunos, { foreignKey: 'id' })
      Aulas.hasMany(models.Materias, { foreignKey: 'id' })
    }
  };
  Aulas.init({
    ProfessorId: DataTypes.INTEGER,
    AlunoId: DataTypes.INTEGER,
    MateriaId: DataTypes.INTEGER,
    dataHoraInicio: DataTypes.DATE,
    dataHoraFim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Aulas',
  });
  return Aulas;
};