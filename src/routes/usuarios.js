const { Router } = require('express');
const userController = require('../controllers/usuarios');

const router = Router();

router
.get('/login', userController.login)
.get('/user/:id', userController.findUm)
.get('/user/all', userController.find)
.post('/user', userController.createUser)
.put('/user/:id', userController.updateUser)
.delete('/user/:id', userController.delete)

module.exports = router;