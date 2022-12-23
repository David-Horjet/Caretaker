const express = require('express')

const controller = require('../controller/authController')


const authRouter = express.Router()

authRouter.post('/register', controller.register);
authRouter.post('/login', controller.login);
authRouter.get('/all', controller.allAppUser);

module.exports = {
    authRouter
}