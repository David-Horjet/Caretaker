const express = require('express')

const controller = require('../controller/tenantController')

const tenantRouter = express.Router()

tenantRouter.get('/all', controller.getTenants);
tenantRouter.get('/:id', controller.getTenant);
tenantRouter.post('/new/:id', controller.addPropertyForm);

module.exports = {
    tenantRouter
}