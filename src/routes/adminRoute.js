const router = require('express').Router()

const {
    getAllService,
    createService,
    editService,
    removeService,
    getAllOrder,
    editOrder,
    getAllUser,
    getUserOrder,
    getAllReviews,
    removeReview,
    getAllContact,
    getAllPayment
} = require('../controller/adminController')

router.get('/services', getAllService)
router.post('/service/create', createService)
router.patch('/service/edit', editService)
router.delete('/service/delete', removeService)

router.get('/orders', getAllOrder)
router.patch('/order/edit', editOrder)

router.get('/users', getAllUser)
router.get('/user/order', getUserOrder)

router.get('/reviews', getAllReviews)
router.delete('/review/delete', removeReview)

router.get('/contacts', getAllContact)

router.get('/payments', getAllPayment)

module.exports = router