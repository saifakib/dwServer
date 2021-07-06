const { body, validationResult } = require('express-validator')
const createError = require('http-errors')
const { User } = require('../../model')


// check user exits
const checkHaveUser = (field, value) => {

    const user = await User.findOne({ field: value })
    if (user) {
        throw createError("User already is use !")
    }
}

// user signup validation
const signupValidator = [
    body('username')
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
                checkHaveUser(email, value)
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
                checkHaveUser(mobile, value)
            } catch (err) {
                throw createError(err.message)
            }
        }),

    body('password')
        .isIn(['123', 'password', 'bangladesh', 'programming'])
        .withMessage("Do not use a common word as a password")
        .isStrongPassword()
        .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol")
        
]


// user signup validation error handler
const signupValidationHandler = ( req, res, next ) => {

    const errors = validationResult(req)
    const mappedErrors = errors.mapped()

    if ( Object.keys(mappedErrors).length == 0 ) {
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

