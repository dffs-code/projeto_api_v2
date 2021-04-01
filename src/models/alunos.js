'use strict';
module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define('alunos', {
        idUsuario: DataTypes.INTEGER,
        interesses: DataTypes.TEXT,
    }, {});

    Alunos.associate = function(models) {
    };
    return Alunos;
};