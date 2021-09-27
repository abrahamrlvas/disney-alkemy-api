const { Router } = require('express');
const route = Router();
const AuthController = require('../controllers/auth.controller');

route.post('/auth/register', AuthController.authRegister);
route.post('/auth/login', AuthController.authLogin);

module.exports = route;