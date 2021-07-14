const jwt = require('jsonwebtoken')


const checkToken = async (req, res, next) => {

    const token = req.header('x-auth-token');

    if (!token) {
        res.status(401).json({
            msg: "No JSON Web Token Found, Authorization denied"
        })
    }

    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}


const requireRole = (roles) => {
    return function (req, res, next) {
        if (req.user.role && roles.includes(req.user.role)) {
            next()
        } else {
            res.status(401).json({
                errors: {
                    msg: "You are not authorized!",
                },
            });
        }
    }
}


module.exports = {
    checkToken,
    requireRole
}