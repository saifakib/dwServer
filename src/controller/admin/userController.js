


const {  User, Order } = require('../../model')


exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({users})
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getUserOrder = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json({orders})
    } catch (e) {
        res.status(501).json(e)
    }
}