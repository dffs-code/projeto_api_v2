const database = require('../models')

module.exports = {
  async createMateria(req, res) {
    try {
      const materiaCriada = await database.Materias.create({
        descricao: req.body.descricao
      })
      res.status(201).json(materiaCriada)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  async getAll(req, res) {
    try {
      var selectedMaterias = await database.Materias.findAll();
      if (!selectedMaterias) {
        res.status(404).json({
          mensagem: "Não há matérias cadastradas"
        })
      } else {
        res.status(200).json(selectedMaterias)
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
      const materia = await database.Materias.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(materia)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  async delete(req, res) {
    const {
      id
    } = req.params;

    try {
      await database.Materias.destroy({
        where: {
          id: Number(id)
        }
      })
      res.status(200).json({
        mensagem: "Matéria Deletado: " + id
      })

    } catch (error) {
      res.status(400).json(error.message)
    }

  },

  async updateMateria(req, res) {
    const {
      id
    } = req.params;
    try {
      const retorno = await database.Materias.update({
        descricao: req.body.descricao
      }, {
        where: {
          id: Number(id)
        } 
      })

      if(retorno == 1 ){
        res.status(200).json({
          message: "Matéria Alterada com Sucesso"
        })
      }else{
        res.status(404).json({
          message: "Matéria não encontrado"
        })
      }
    } catch (error) {
      res.status(500).json(error.mensagem)
    }
  },
}