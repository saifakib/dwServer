/**
 * Route /admin/user/
 */

const router = require('express').Router()

const {
    getAllUser,
    getUserOrder
} = require('../../controller/admin/userController')

router.get('/all', getAllUser)
router.get('/orders', getUserOrder)

module.exports = router