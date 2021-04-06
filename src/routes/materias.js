const { Router } = require('express');
const materiaController = require('../controllers/materias');

const router = Router();

router
.get('/materia/:id', materiaController.getOne)
.get('/materias/all', materiaController.getAll)
.post('/materia', materiaController.createMateria)
.put('/materia/:id', materiaController.updateMateria)
.delete('/materia/:id', materiaController.delete)

module.exports = router;