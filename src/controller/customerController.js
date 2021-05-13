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

exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const  _id = req.params.id;


        let findUser = await User.findByIdAndUpdate(
            {_id},
            { $set: {
                name,
                email
            }}
        )
        if (findUser) {
            res.status(201).json(findUser)
        }
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.deleteUser = async(req, res) => {
    try{
        const _id = req.params.id;
        await User.findByIdAndDelete({ _id })
        res.status(204).json({ msg: "deleted"})

    }
    catch (e) {
        res.status(501).json(e)
    }
}

exports.getUser = async (req, res) => {
    try {
        const _id = req.params.id;
        let user = User.findById(_id)
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