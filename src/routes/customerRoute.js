const router = require('express').Router()
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    postPayment,
    getOrderedList,
    postReview
} = require('../controller/customerController')

router.post('/createuser', createUser)
router.get('/user/:id', getUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

// router.get('/orders', getOrderedList)

// router.post('/payment', postPayment)

// router.post('/review', postReview)

module.exports = router