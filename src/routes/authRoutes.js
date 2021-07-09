const router = require('express').Router()
const {
    signUpController,
    loginController
} = require('../controller/authController')

const { signupValidator, signupValidationHandler } = require('../validator/user/signupValidator')
const { loginValidator, loginValidationHandler } = require('../validator/user/loginValidation')


router.post('/signup',
    signupValidator,
    signupValidationHandler,
    signUpController
)

router.post('/login', loginValidator, loginValidationHandler, loginController)

module.exports = router