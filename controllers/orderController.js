const Dock = require('../models/Dock')
const Order = require('../models/Order')

// be sure to push orders to user

const createOrder = async (req, res) => {
    try {
        const body = req.body
        const newOrder = await new Order(body)
        const savedOrder = await newOrder.save()
        const updateDock = await Dock.findOneAndUpdate({ _id: savedOrder.orderDock }, {
            $push: { orders: savedOrder._id }
        })
        res.status(200).json({ success: true, data: newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "error", error: error })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = useParams()
        const deletedOrder = await Order.findOneAndDelete({ _id: id })
        res.status(200).json({ success: true, data: deletedOrder })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "error", error: error })
    }
}

module.exports = {
    createOrder
}