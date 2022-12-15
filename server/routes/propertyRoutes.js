const express = require('express')

const controller = require('../controller/propertyController')

const propertyRouter = express.Router()

propertyRouter.get('/all', controller.getProperties)

module.exports = {
    propertyRouter
}