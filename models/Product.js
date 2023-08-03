const { Decimal128 } = require('bson')
const mongoose = require('mongoose')
const { v4: uuid } = require('uuid')

const productSchema = new mongoose.Schema({
    _id: { type: String, default: uuid },
    name: { type: String, unique: true, required: true },
    description: { type: String },
    price: { type: Decimal128 },
    inventory: { type: Number },
    Image: { type: String }
})

const Product = mongoose.model("product", productSchema)
module.exports = Product