//const { Service, Review, Contact } = require('../model')

exports.homeController = async (req, res) => {
    try {
        // const services = await Service.find({});
        // const reviews = await Review.find({});
        // res.status(200).json({
        //     services: services,
        //     reviews: reviews
        // })
        res.status(200).json("Homepage")
    } catch (e) {
        res.status(501).json(e)
    }
}

// exports.postContactController = async (req, res) => {
//     const { name, email, description } = req.body
//     try {
//         const contact = new Contact({
//             name,
//             email,
//             description
//         })

//         await contact.save();
//         res.status(200).json({ msg: "Posted Contact"});

//     } catch (e) {
//         res.status(501).json(e)
//     }
// }