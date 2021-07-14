const router = require('express').Router()

// const {
//     getAllOrder,
//     editOrder,
//     getAllUser,
//     getUserOrder,
//     getAllReviews,
//     removeReview,
//     getAllContact,
//     getAllPayment
// } = require('../../controller/adminController')

const serviceRoute = require('./serviceRoute')
const reviewRoute = require('./reviewRoute')
const contactRoute = require('./contactRoute')

// Service Route
router.use('/service', serviceRoute)
router.use('/review', reviewRoute)
router.use('/contact', contactRoute)


// router.get('/orders', getAllOrder)
// router.patch('/order/edit', editOrder)

// router.get('/users', getAllUser)
// router.get('/user/order', getUserOrder)

// router.get('/reviews', getAllReviews)
// router.delete('/review/delete', removeReview)

// router.get('/contacts', getAllContact)

// router.get('/payments', getAllPayment)

module.exports = router