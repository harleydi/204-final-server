const express = require('express')
const { createProduct, getAllProducts, editProduct, deleteProduct } = require('../controllers/inventoryController')
const { checkIsEmpty } = require('../utils/checkIsEmpty')


const router = express.Router()

router.post('/add-product',checkIsEmpty, createProduct)
router.get('/all', getAllProducts)
router.put('/edit-product/:id', editProduct)
router.delete('/delete/:id', deleteProduct)

module.exports = router