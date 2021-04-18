const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Review = model('Review', reviewSchema)
module.exports = Review