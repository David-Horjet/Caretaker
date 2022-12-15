const express = require('express')

const controller = require('../controller/mainController')

const home = express.Router()

home.get('/', controller.home)
// home.get('*', controller.lost)

module.exports = {
    home
}