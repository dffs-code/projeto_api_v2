const { Router } = require('express');
const aulaController = require('../controllers/aulas');

const router = Router();

router
.get('/materia/:id', aulaController.getOne)
.get('/materias/all', aulaController.getAll)
.post('/materia', aulaController.createAula)
.put('/materia/:id', aulaController.updateAula)
.delete('/materia/:id', aulaController.delete)

module.exports = router;