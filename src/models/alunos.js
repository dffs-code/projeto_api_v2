'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }

    // static associate(models) {
    //   Pessoas.hasMany(models.Turmas,{
    //     foreignKey: 'docente_id'
    //   })
    // }
  };

  alunos.init({
    idUsuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    interesses: DataTypes.TEXT,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aluno',
  });
  return alunos;
};