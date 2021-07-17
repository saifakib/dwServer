const { Order } = require('../../model')


exports.getOrderedList = async (req, res) => {
    const user_id = req.user.userid
    try {
        const orders = await Order.find({ user_id })
        res.status(200).json({ orders })
    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.postASingleOrder = async (req, res) => {
    const invoice_id = 'DRYWASH' + Date.now().toUpperCase()
    const { service_id, payment_id } = req.body;
    try {
        const requestOrder = new Order({
            invoice_id,
            user_id: req.user.userid,
            service_id,
            payment_id
        })
        const response = await requestOrder.save()
        res.status(201).json({ response })
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.getSingleUserAllOrder = async (req, res) => {
    try {
        const requestUserOrders = await Order.find({ user_id: req.user.userid })
        res.status(200).json({ requestUserOrders })
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}