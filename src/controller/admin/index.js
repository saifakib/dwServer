const { Payment } = require('../../model')


//Payment list
exports.getAllPayment = async (req, res) => {
    try {
        const payments = await Payment.find({})
        res.status(200).json({payments})
    } catch (e) {
        res.status(501).json(e)
    }
}