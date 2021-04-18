const { Service, User, Order, Review } = require('../model')


// Service Section

exports.getAllService = async (req, res) => {
    try {
        const services = await Service.find({})
        res.status(200).json(services)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.createService = async (req, res) => {
    try {
        const { name, img, price } = req.body;

        let service = new Service({
            name,
            img,
            price
        })
        let res = await product.save();
        if(res) {
            res.status(201).json({ msg: "Service created"})
        }
        // if (success) {
        //     await Admin.findOneAndUpdate(
        //         { _id: admin_id },
        //         { $push: { 'products': prod._id } }
        //     )
        // }

    } catch (e) {
        res.status(501).json(e)
    }
}

exports.editService = async (req, res) => {
    const {id, name, img, price } = req.body;

    console.log('logi')

    try {
        const service = await Service.findOneAndUpdate(
            { _id: id },
            { $set: { name, img, price } }
        )
        
        res.status(200).json({ msg: 'Service Updated'})
        
    } catch (e) {
        res.status(501).json(e)
    }
}


exports.removeService = async (req, res) => {
    const _id = req.body.id;

    try {
        await Product.findByIdAndDelete({ _id })
        res.status(202).jons({ msg: 'Service Removed' })
    } catch (e) {
        res.status(501).json(e)
    }
}


//User Section
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getUserOrder = async( req,res ) => {
    try{
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (e) {
        res.status(501).json(e)
    }
}

//Review Section
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.status(200).json(reviews)
    } catch (e) {
        res.status(501).json(e)
    }
}
exports.removeReview = async (req, res) => {
    const _id = req.body.id;

    try {
        await Review.findByIdAndDelete({ _id })
        res.status(202).jons({ msg: 'Review Removed' })
    } catch (e) {
        res.status(501).json(e)
    }
}