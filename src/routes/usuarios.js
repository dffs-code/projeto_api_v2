const { Router } = require('express');
const userController = require('../controllers/usuarios');

const router = Router();

router.post('/user', userController.createUser);
router.get('/users', userController.find);
router.delete('/user', userController.delete);
router.put('/user', userController.updateUser);
router.get('/login', userController.login);

module.exports = router;