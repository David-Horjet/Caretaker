const express = require('express')

const controller = require('../controller/userController')

const {loginRequired} = require('../middlewares/auth')


const userRouter = express.Router()

userRouter.get('/:id',loginRequired,controller.singleUser);
userRouter.get('/all', controller.allUsers);

module.exports = {
    userRouter
}