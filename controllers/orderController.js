const Order = require('../models/Order')

const createOrder = async (req, res) => {
    try {
        const newOrder = await new Order
        await newOrder.save()
        res.status(200).json({ success: true, data: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "error", error: error })
    }
}

module.exports = {
    createOrder
}