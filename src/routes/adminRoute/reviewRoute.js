/**
 * Route /admin/review/
 */

const router = require('express').Router()
const {
    getAllReviews,
    editReview,
    removeReview
} = require('../../controller/admin/reviewController')

router.get('/all', getAllReviews)
router.patch('/edit', editReview)
router.delete('/delete', removeReview)

module.exports = router