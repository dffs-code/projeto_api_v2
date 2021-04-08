const { Router } = require('express');
const rateLimit = require('express-rate-limit');
const userController = require('../controllers/usuarios');

const router = Router();
//WindowMs define o tempo de requisição e o max é o número máximo de requisições, não é o melhor jeito, mas para fins de testes vamos fazer desta forma --06.04.2021
const apiLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hrs
    max: 2,
    message: 'O limite de requisição foi excedido, mais de 100 em 1 dia.', 
    headers: true,
});

router
.get('/login', userController.login)
.get('/user/:id', userController.getOne)
.get('/users/all', userController.getAll)
.post('/user',apiLimiter, userController.createUser)
.put('/user/:id', userController.updateUser)
.delete('/user/:id', userController.delete)

module.exports = router;