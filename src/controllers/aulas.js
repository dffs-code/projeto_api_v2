const database = require('../models')

module.exports = {
  async createAula(req, res) {
    try {
      const aulaCriada = await database.Aulas.create({
        ProfessorId: req.body.ProfessorId,
        AlunoId: req.body.AlunoId,
        MateriaId: req.body.MateriaId,
        dataHoraInicio: req.body.dataHoraInicio,
        dataHoraFim: req.body.dataHoraFim
      })
      res.status(201).json(aulaCriada)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getAll(req, res) {
    try {
      var selectedAulas = await database.Aulas.findAll();
      if (!selectedAulas) {
        res.status(404).json({
          mensagem: "Não há aulas cadastradas"
        })
      } else {
        res.status(200).json(selectedAulas)
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
      const aula = await database.Aulas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(aula)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  async delete(req, res) {
    const {
      id
    } = req.params;

    try {
      await database.Aulas.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Aula Deletada: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateAula(req, res) {
    const {
      id
    } = req.params;
    try {
      const retorno = await database.Aulas.update({
        ProfessorId: req.body.ProfessorId,
        AlunoId: req.body.AlunoId,
        MateriaId: req.body.MateriaId,
        dataHoraInicio: req.body.dataHoraInicio,
        dataHoraFim: req.body.dataHoraFim,
        updatedAt: new Date()
      }, {
        where: {
          id: Number(id)
        } 
      })

      if(retorno == 1 ){
        res.status(200).json({
          message: "Aula Alterada com Sucesso"
        })
      }else{
        res.status(404).json({
          message: "Aula não encontrado"
        })
      }
    } catch (error) {
      res.status(500).json(error.mensagem)
    }
  },
}