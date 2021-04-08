const database = require('../models')

module.exports = {
  async createProfessor(req, res) {
    const { id } = req.params;
    try {
      const professorCriado = await database.Professores.create({
        UsuarioId: Number(id),
        sobre: req.body.sobre,
        preco: parseFloat(req.body.preco),
        modalidade: req.body.modalidade
      })
      res.status(201).json(professorCriado)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getPerfilProfessor(req, res) {
    const { id } = req.params
    try {
      //Include trabalha como um inner join. Neste caso: Usuarios INNER JOIN Professores on Usuarios.id = Professores.UsuarioId
      const selectedProfessores = await database.Professores.findOne({
        where: {
          id: Number(id)
        },  
        include: [{
          model: database.Usuarios,
        },{ 
          model: database.Formacoes
        }]
      })
      if (!selectedProfessores) {
        res.status(404).json({
          mensagem: "Não há professores cadastrados"
        })
      } else {
        res.status(200).json(selectedProfessores)
      }
    } catch (error) {
      
    }
  },

  async getAll(req, res) {
    try {
      
      const selectedProfessores = await database.Professores.findAll();
      if (!selectedProfessores) {
        res.status(404).json({
          mensagem: "Não há professores cadastrados"
        })
      } else {
        res.status(200).json(selectedProfessores)
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
      const professor = await database.Professores.findByPk(id)
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
      await database.Professores.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Professor Deletado: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateProfessor(req, res) {
    const {
      id
    } = req.params;
    try {
      const retorno = await database.Professores.update({
        sobre: req.body.sobre,
        preco: parseFloat(req.body.preco),
        modalidade: req.body.modalidade,
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