/**
 * Route /admin/order/
 */

const router = require('express').Router()
const {
    getAllOrder,
    editOrder
} = require('../../controller/admin/orderController')

router.get('/all', getAllOrder)
router.patch('/edit', editOrder)


module.exports = router