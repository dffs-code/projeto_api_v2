'use strict';
module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define('alunos', {
        idUsuario: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        interesses: DataTypes.TEXT,
        cep: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        bairro: DataTypes.STRING,
        endereco: DataTypes.STRING
    }, {});

    Alunos.associate = function(models) {
    };
    return Alunos;
};