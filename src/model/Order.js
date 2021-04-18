const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    service_id: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
},
    { timestamps: true }
)

const Order = model('Order', orderSchema)
module.exports = Order