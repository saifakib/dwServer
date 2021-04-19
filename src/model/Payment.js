const { Schema, model } = require('mongoose')

const paymentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    payment_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
)

const Payment = model('Payment', paymentSchema)
module.exports = Payment