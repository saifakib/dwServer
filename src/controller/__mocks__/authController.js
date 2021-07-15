const { User } = require('../../model')

exports.getUser = async (req, res) => {
    const services = [
        {
            "_id": 47982459842502348,
            "name": "Shirt Wash",
            "price": 300
        },
        {
            "_id": 479894759854702348,
            "name": "Pant Wash",
            "price": 200
        }
    ]
    try {
        //let users = await User.find({})
        res.status(200).json({ services });

    } catch (e) {
        res.status(501).json({ errors: [{ msg: "Internal Server Error!" }] })
    }
}