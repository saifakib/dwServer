const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    }
},
    { timestamps: true }
)

const Contact = model('Contact', contactSchema)
module.exports = Contact