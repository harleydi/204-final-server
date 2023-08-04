const express = require('express')
const { createOrder } = require('../controllers/orderController')

const router = express.Router()

router.post('/add-order', createOrder)

module.exports = router