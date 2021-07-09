const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
    {
        invoice_id: {
            type: String,
            required: true,
            trim: true
        },
        user_id: {
            type: String,
            required: true
        },
        service_id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "processing", "complete"],
            default: "pending"
        }
    },
    { timestamps: true }
)

const Order = model('Order', orderSchema)
module.exports = Order