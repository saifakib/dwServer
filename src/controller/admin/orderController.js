const { Order } = require('../../model')


//Order Section
exports.getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find({})         // desc order or status 1 & 2
        res.status(200).json({orders})
    } catch (e) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}


exports.editOrder = async (req, res) => {
    const { id, status } = req.body;
    try {
        await Order.findOneAndUpdate(
            { _id: id },
            { $set: { status } }
        )
        res.status(200).json({ msg: 'Order Updated' })

    } catch (e) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}