const { Order,Payment, Review, User } = require('../model')



exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        let newUser = new User({
            name,
            email
        })
        let user = await newUser.save()
        if (user) {
            res.status(201).json(user)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.postPayment = async (req, res) => {
    const { user_id, payment_id, amount } = req.body
    try {
        let payment = new Payment({
            user_id,
            payment_id,
            amount
        })
        let res = await payment.save();
        if (res) {
            res.status(201).json({ msg: "Payment" })
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getOrderedList = async (req, res) => {
    const { user_id } = req.body
    try {
        const orders = await Order.find({ user_id: user_id })
        res.status(200).json({orders})
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.postReview = async (req, res) => {
    const { user_id, name, designation, description } = req.body
    try {
        let review = new Review({
            user_id,
            name,
            designation,
            description
        })
        let res = await review.save();
        if (res) {
            res.status(201).json({ msg: "Review" })
        }
    } catch (e) {
        res.status(501).json(e)
    }
}