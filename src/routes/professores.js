const { Router } = require('express');
const professorController = require('../controllers/professores');

const router = Router();

router
.get('/professor/:id', professorController.getOne)
.get('/professores/all', professorController.getAll)
.get('/profile/professor/:id', professorController.getPerfilProfessor)
.post('/professor/:id', professorController.createProfessor)
.put('/professor/:id', professorController.updateProfessor)
.delete('/professor/:id', professorController.delete)

module.exports = router;