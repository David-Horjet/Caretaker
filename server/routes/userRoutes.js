const express = require('express')

const controller = require('../controller/userController')

const {loginRequired} = require('../../middlewares/auth')


const userRouter = express.Router()

userRouter.post('/login/:id',loginRequired,controller.updatePassword)

module.exports = {
    userRouter
}