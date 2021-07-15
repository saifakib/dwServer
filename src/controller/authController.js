
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { User } = require('../model/index')

exports.signUpController = async (req, res, next) => {

    const { name, email, mobile, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        const user = new User({
            name,
            email,
            mobile,
            password: hashPassword
        })

        await user.save()

        const payload = {
            userid: user._id,
            username: user.name,
            mobile: user.mobile,
            email: user.email,
            role: user.role || "customer",
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 60 * 60 * 2 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            }
        )

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}


exports.loginController = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({
            $or: [{ email: username }, { mobile: username }]
        })
        if (user && user._id) {
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (passwordMatch) {
                const payload = {
                    userid: user._id,
                    username: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: user.role || "customer",
                }

                //generate token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: 60 * 60 * 2 },
                    (err, token) => {
                        if (err) throw err
                        res.json({ token })
                    }
                )
            } else {
                //throw createError('Login Faild ! Please try again')
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'Invalid credentials.',
                        },
                    ],
                });
            }
        } else {
            //throw createError('Login Faild ! Please try again')
            return res.status(400).json({
                errors: [
                    {
                        msg: 'Invalid credentials.',
                    },
                ],
            });
        }
    } catch (err) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.getUser = async (req, res) => {
    try {
        let users = await User.find({})
        res.status(200).json({ users });

    } catch (e) {
        res.status(501).json({ errors: [{ msg: "Internal Server Error!"}]})
    }
}


exports.logout = async (req, res, next) => {
    return 0
}