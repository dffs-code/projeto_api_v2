const { Router } = require('express');
const alunoController = require('../controllers/alunos');

const router = Router();

router
.get('/aluno/:id', alunoController.getOne)
.get('/alunos/all', alunoController.getAll)
.get('/profile/aluno/:id', alunoController.getAlunoUsuario)
.post('/aluno/:id', alunoController.createAluno)
.put('/aluno/:id', alunoController.updateAluno)
.delete('/aluno/:id', alunoController.delete)

module.exports = router;