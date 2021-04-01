const database = require('../models')
const bcrypt = require('bcrypt');

module.exports = {
  async createUser(req, res) {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const usuarioCriado = await database.usuarios.create({
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, salt)
      })
      res.status(201).json(usuarioCriado)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async find(req, res) {
    try {
      var selectedUsers
      if (!req.body.id) {
        selectedUsers = await database.usuarios.findAll();
      } else {
        selectedUsers = await database.usuarios.findByPk(req.body.id)
      }

      if (!selectedUsers) {
        res.status(404).json({
          mensagem: "não existe esse user"
        })
      } else {
        res.status(200).json(selectedUsers)
      }
    } catch (error) {
      console.log(error);
    }
  },

  async delete(req, res) {
    await database.usuarios.destroy({
      where: {
        id: req.body.id
      }
    })

    res.status(200).json({
      mensagem: "usuário deletado: " + req.body.id
    })
  },

  async updateUser(req, res) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    await database.usuarios.update({
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha, salt),
      isAtivo: req.body.isAtivo,
      isProfessor: req.body.isProfessor
    }, {
      where: {
        id: req.body.id
      }
    })

    res.status(200).json({
      mensagem: "Usuário alterado com sucesso"
    })
  },

  async login(req, res) {
    try {
      var selectedUser;
      selectedUser = await database.usuarios.findOne({
        where: {
          email: req.body.email
        }
      })
      bcrypt.compare(req.body.senha, selectedUser.senha, (err, result) => {
        if (err) {
          res.status(400).json({
            error: err
          })
        } else {
          if (result) {
            res.status(200).json({
              isCorrect: result
            })
          } else {
            res.status(401).json({
              isCorrect: result,
              message: "A senha informada não está correta"
            })
          }
        }
      })

    } catch (error) {
      if (!selectedUser) {
        res.status(404).json({
          message: "Usuário não cadastrado"
        })
      } else {
        res.status(400).json({
          message: "Algo na requisição deu errado! Verifique o log"
        })
        console.log(error)
      }
    }
  }
}


