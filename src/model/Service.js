const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
},
    { timestamps: true }
)

const Service = model('Service', serviceSchema)
module.exports = Service