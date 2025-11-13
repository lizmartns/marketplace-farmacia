const { Router } = require('express');
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const authMiddleware = require('./middlewares/auth');

const routes = Router();

// Rotas de Autenticação
routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

// Rotas Protegidas (Exemplo)
routes.get('/profile', authMiddleware, UserController.profile);

module.exports = routes;
