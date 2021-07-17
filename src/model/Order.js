const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
    {
        invoice_id: {
            type: String,
            required: true,
            trim: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        service_id: {
            type: Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        },
        payment_id: {
            type: Schema.Types.ObjectId,
            ref: 'Payment',
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