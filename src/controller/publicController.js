const { Service, Review, Contact } = require('../model')

exports.homeController = async (req, res) => {
    try {
        const services = await Service.find({});
        const reviews = await Review.find({});
        res.status(200).json({
            services: services,
            reviews: reviews
        })
        // res.status(200).json("Homepage")
    } catch (e) {
        res.status(501).json({ errors: [{ msg: 'Internal Server Error!' }] });
    }
}

exports.getSingleService = async (req, res) => {
    try {
        const service = await Service.find({ _id: req.params.id })
        res.status(200).json({ service })
    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
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

        await contact.save();
        res.status(200).json({ msg: "Contact Submited" });

    } catch (e) {
        res.status(501).json({ errors: [{ msg: "Internal Server Error!" }] })
    }
}