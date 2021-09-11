/**
 * Route /customer/
 */


const router = require('express').Router()
// const {
    // createUser,
    // postPayment,
// } = require('../../controller/customer/reviewController')

const orderRoute = require('./orderRoute')
const reviewRoute = require('./reviewRoute')

router.use('/order', orderRoute)
router.use('/review', reviewRoute)

// router.post('/createuser', createUser)

// router.post('/payment', postPayment)


module.exports = router