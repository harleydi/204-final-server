const mongoose = require('mongoose')
const { v4 : uuid } = require('uuid')

const orderSchema = new mongoose.Schema({
    _id: { type: String, default: uuid },
    orderOwner: { type: String, ref: "user" },
    orderTotal: { type: Number, default: 0.00 },
    orderItems: [{ type: Object, ref: "product" }],
    orderDock: { type: String, default: "Staging Dock" },
    orderStatus: { type: { enum: ['order recieved', 'order being prepared', 'order ready for pick', 'order complete']}}
})

const Order = mongoose.model("order", orderSchema)
module.exports = Order