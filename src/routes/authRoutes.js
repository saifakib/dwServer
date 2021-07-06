const router = require('express').Router()
const {
    signUpController
} = require('../controller/authController')

const { signupValidator, signupValidationHandler } = require('../validator/user/signupValidator')


router.get('/signup',
    signupValidator,
    signupValidationHandler,
    signUpController
)

module.exports = router