const { Order,Payment, Review, User } = require('../../model')



// exports.createUser = async (req, res) => {
//     try {
//         const { name, email } = req.body;

//         let newUser = new User({
//             name,
//             email
//         })
//         let user = await newUser.save()
//         if (user) {
//             res.status(201).json(user)
//         }
//     } catch (e) {
//         res.status(501).json(e)
//     }
// }

// exports.postPayment = async (req, res) => {
//     const { user_id, payment_id, amount } = req.body
//     try {
//         let payment = new Payment({
//             user_id,
//             payment_id,
//             amount
//         })
//         let res = await payment.save();
//         if (res) {
//             res.status(201).json({ msg: "Payment" })
//         }
//     } catch (e) {
//         res.status(501).json(e)
//     }
// }
