'use strict';
module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define('alunos', {
        UsuarioId: DataTypes.INTEGER,
        interesses: DataTypes.TEXT,
    }, {});

    Alunos.associate = function(models) {
        Alunos.belongsTo(models.Usuarios)
    };
    return Alunos;
};