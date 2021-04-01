const database = require('../models')
const bcrypt = require('bcrypt');

module.exports = {
  async createUser(req, res) {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const usuarioCriado = await database.usuarios.create({
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, salt),
        nome: req.body.nome,
        idade: req.body.idade,
        cep: req.body.cep,
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        endereco: req.body.endereco
      })
      res.status(201).json(usuarioCriado)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getAll(req, res) {
    try {
      var selectedUsers = await database.usuarios.findAll();
      if (!selectedUsers) {
        res.status(404).json({
          mensagem: "Não há usuários cadastrados"
        })
      } else {
        res.status(200).json(selectedUsers)
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
    console.log("chegou aqui")
  },

  async getOne(req, res) {
    const {
      id
    } = req.params
    try {
      const usuario = await database.usuarios.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(usuario)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  async delete(req, res) {
    const {
      id
    } = req.params;

    try {
      await database.usuarios.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Usuário Deletado: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateUser(req, res) {
    const {
      id
    } = req.params;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    try {
      const retorno = await database.usuarios.update({
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, salt),
        nome: req.body.nome,
        idade: req.body.idade,
        cep: req.body.cep,
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        endereco: req.body.endereco,
        isAtivo: req.body.isAtivo,
        isProfessor: req.body.isProfessor
      }, {
        where: {
          id: Number(id)
        } 
      })

      if(retorno == 1 ){
        res.status(200).json({
          message: "Usuário Alterado com Sucesso"
        })
      }else{
        res.status(404).json({
          message: "Usuário não encontrado"
        })
      }
    } catch (error) {
      res.status(500).json(error.mensagem)
    }
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