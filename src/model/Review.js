const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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
    },
    display: {
        type: Boolean,
        enum: [true, false],
        default: false
    }
},
    { timestamps: true }
)

const Review = model('Review', reviewSchema)
module.exports = Review