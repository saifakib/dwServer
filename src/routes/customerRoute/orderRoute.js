/**
 * Route /customer/order/
 */

const router = require('express').Router()
const {
    getOrderedList,
    postASingleOrder,
    getSingleUserAllOrder
} = require('../../controller/customer/orderController')

router.get('/all', getOrderedList)
router.post('/', postASingleOrder)
router.get('/single', getSingleUserAllOrder)


module.exports = router