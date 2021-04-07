const database = require('../models')

module.exports = {
  async createFormacao(req, res) {
    const { id } = req.params;
    try {
      const professorCriado = await database.Formacoes.create({
        ProfessorId: Number(id),
        nivel: req.body.nivel,
        curso: req.body.curso,
        instituicao: req.body.instituicao,
        ano: req.body.ano
      })
      res.status(201).json(professorCriado)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getFormacaoProfessor(req, res) {
    const { id } = req.params
    try {
      //Include trabalha como um inner join. Neste caso: Usuarios INNER JOIN Formacoes on Usuarios.id = Formacoes.UsuarioId
      const selectedFormacoes = await database.Formacoes.findOne({
        where: {
          id: Number(id)
        },  
        include: [{
          model: database.Professores
        }]
      })
      if (!selectedFormacoes) {
        res.status(404).json({
          mensagem: "Não há formações cadastradas"
        })
      } else {
        res.status(200).json(selectedFormacoes)
      }
    } catch (error) {
      
    }
  },

  async getAll(req, res) {
    try {
      
      const selectedFormacoes = await database.Formacoes.findAll();
      if (!selectedFormacoes) {
        res.status(404).json({
          mensagem: "Não há professores cadastrados"
        })
      } else {
        res.status(200).json(selectedFormacoes)
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
      const professor = await database.Formacoes.findByPk(id)
      return res.status(200).json(professor)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  async delete(req, res) {
    const {
      id
    } = req.params;

    try {
      await database.Formacoes.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Formação Deletada: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateFormacao(req, res) {
    const {
      id
    } = req.params;
    try {
      const retorno = await database.Formacoes.update({
        nivel: req.body.nivel,
        curso: req.body.curso,
        instituicao: req.body.instituicao,
        ano: req.body.ano,
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