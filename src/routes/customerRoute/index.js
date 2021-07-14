const router = require('express').Router()
const {
    // createUser,
    // postPayment,
    // getOrderedList,
    postReview
} = require('../../controller/customer/reviewController')

// router.post('/createuser', createUser)

// router.get('/orders', getOrderedList)

// router.post('/payment', postPayment)

router.post('/review', postReview)

module.exports = router