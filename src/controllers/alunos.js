const database = require('../models')

module.exports = {
  async createAluno(req, res) {
    const { id } = req.params;
    
    try {
      const alunoCriado = await database.Alunos.create({
        UsuarioId: Number(id),
        interesses: req.body.interesses
      })
      res.status(201).json(alunoCriado)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getAlunoUsuario(req, res) {
    const { id } = req.params
    try {
      //Include trabalha como um inner join. Neste caso: Usuarios INNER JOIN Alunos on Usuarios.id = Alunos.UsuarioId
      const selectedAlunos = await database.Alunos.findOne({
        where: {
          id: Number(id)
        },  
        include: [{
          model: database.Usuarios
        }]
      })
      if (!selectedAlunos) {
        res.status(404).json({
          mensagem: "Não há Alunos cadastrados"
        })
      } else {
        res.status(200).json(selectedAlunos)
      }
    } catch (error) {
      
    }
  },

  async getAll(req, res) {
    try {
      
      const selectedAlunos = await database.Alunos.findAll();
      if (!selectedAlunos) {
        res.status(404).json({
          mensagem: "Não há Alunos cadastrados"
        })
      } else {
        res.status(200).json(selectedAlunos)
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async getOne(req, res) {
    const {
      id
    } = req.params
    try {
      const aluno = await database.Alunos.findByPk(id)
      return res.status(200).json(aluno)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  async delete(req, res) {
    const {
      id
    } = req.params;

    try {
      await database.Alunos.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Aluno Deletado: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateAluno(req, res) {
    const {
      id
    } = req.params;
    try {
      const retorno = await database.Alunos.update({
        interesses: req.body.interesses,
        updatedAt: new Date()
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
  }
}