const { Router } = require('express');
const userController = require('../controllers/usuarios');

const router = Router();

router
.get('/login', userController.login)
.get('/user/:id', userController.getOne)
.get('/users/all', userController.getAll)
.post('/user', userController.createUser)
.put('/user/:id', userController.updateUser)
.delete('/user/:id', userController.delete)

module.exports = router;