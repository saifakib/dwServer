/**
 * Route /customer/review/
 */

const router = require('express').Router()

const {
    postReview
} = require('../../controller/customer/reviewController')

router.post('/', postReview)


module.exports = router