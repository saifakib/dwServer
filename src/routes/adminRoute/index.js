/**
 * Route /admin/
 */

const router = require('express').Router()


// const {
//     getAllPayment
// } = require('../../controller/admin')

const serviceRoute = require('./serviceRoute')
const reviewRoute = require('./reviewRoute')
const contactRoute = require('./contactRoute')
const orderRoute = require('./orderRoute')
const userRoute = require('./userRoute')


// Service Route
router.use('/service', serviceRoute)
router.use('/order', orderRoute)
router.use('/user', userRoute)
router.use('/review', reviewRoute)
router.use('/contact', contactRoute)



// router.get('/payments', getAllPayment)

module.exports = router