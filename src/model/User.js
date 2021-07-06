const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        mobile: {
            type: String,
            required: true
        },
        avatar: String,
        password: {
            type: String,
            required: true
        },
        passwordResetToken: String,
        role: {
            type: String,
            enum: ["admin", "customer"],
            default: "customer"
        }
    },
    { timestamps: true }
)

const User = model('User', userSchema)
module.exports = User