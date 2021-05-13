const { Contact } = require('../../model')

exports.homeController = async (req, res) => {
    try {
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
        const reviews = [
            {
                "name": "Saif Uddin",
                "desc": "Your Service Is Awesome"
            }
        ];
        res.status(200).json({
            services: services,
            reviews: reviews
        })
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.postContactController = async (req, res) => {
    const { name, email, description } = req.body
    try {
        const contact = new Contact({
            name,
            email,
            description
        })

        //await contact.save();
        res.status(200).json(contact);

    } catch (e) {
        res.status(501).json(e)
    }
}