const { body, validationResult } = require('express-validator')
const createError = require('http-errors')
const { User } = require('../../model')


// user signup validation
const signupValidator = [
    body('name')
        .isLength({ min: 1 })
        .withMessage("Name is Required")
        .isAlpha("en-US", { ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),

    body('email')
        .isEmail()
        .withMessage("Invalid Email Address")
        .trim()
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value })
                if (user) {
                    throw createError("Email already is use !")
                }
            } catch (err) {
                throw createError(err.message)
            }
        }),

    body('mobile')
        .isMobilePhone("bn-BD", {
            strictMode: true
        })
        .withMessage("Mobile number must be a valid Bangladeshi mobile number")
        .custom(async (value) => {
            try {
                const user = await User.findOne({ mobile: value })
                if (user) {
                    throw createError("This number already is use !")
                }
            } catch (err) {
                throw createError(err.message)
            }
        }),

    body('password')
        .isLength({ min: 1 })
        .withMessage("Password is Required")
        .isStrongPassword()
        .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol")

]


// user signup validation error handler
const signupValidationHandler = (req, res, next) => {

    const errors = validationResult(req)
    const mappedErrors = errors.mapped()

    if (Object.keys(mappedErrors).length == 0) {
        next()
    } else {
        res.status(500).json({
            errors: mappedErrors
        })
    }

}

module.exports = {
    signupValidator,
    signupValidationHandler
}

