const express = require('express')

const controller = require('../controller/propertyController')

const {loginRequired} = require('../middlewares/auth')

const propertyRouter = express.Router()

propertyRouter.get('/all', controller.getProperties)
propertyRouter.post('/new', loginRequired, controller.addProperty)
propertyRouter.post('/upload', loginRequired, controller.uploadFile)
propertyRouter.get('/:id', controller.getProperty)
propertyRouter.get('/allu', controller.allAppUser)

module.exports = {
    propertyRouter
}