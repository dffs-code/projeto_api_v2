'use strict';
module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('alunos', {
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

    Aluno.associate = function(models) {
        Aluno.belongsTo(models.Usuarios, {foreignKey: 'id'});
    };
    return Aluno;
};