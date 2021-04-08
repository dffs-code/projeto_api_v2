const { Router } = require('express');
const formacaoController = require('../controllers/formacoes');

const router = Router();

router
.get('/formacao/:id', formacaoController.getOne)
.get('/formacoes/all', formacaoController.getAll)
.get('/formacao/professor/:id', formacaoController.getFormacaoProfessor)
.post('/formacao/:id', formacaoController.createFormacao)
.put('/formacao/:id', formacaoController.updateFormacao)
.delete('/formacao/:id', formacaoController.delete)

module.exports = router;