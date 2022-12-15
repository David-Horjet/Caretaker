const express = require('express')

const controller = require('../controller/paymentController')


const paymentRouter = express.Router()

paymentRouter.post('/paystack/pay',controller.initializePaymentOnline)
paymentRouter.get('/paystack/verifypayment',controller.verifyPaymentOnline)
paymentRouter.get('/receipt/:id',controller.paymentReceipt)


module.exports = {
    paymentRouter
}
