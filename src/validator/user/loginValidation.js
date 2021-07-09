const { body, validationResult } = require('express-validator')

// user login validation
const loginValidator = [
    body('username')
        .isLength({ min: 1 })
        .withMessage("Mobile Number or Email Required"),

    body('password')
        .isLength({ min: 1 })
        .withMessage("Password must be required")
]


// user login validation error handler
const loginValidationHandler = (req, res, next) => {

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
    loginValidator,
    loginValidationHandler
}

