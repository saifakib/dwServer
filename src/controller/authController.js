const { User } = require('../model/index')

exports.signUpController = ( req, res, next ) => {

    const { name, email, mobile, password, role} = req.body

    
    return true
}