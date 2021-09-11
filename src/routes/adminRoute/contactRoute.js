/**
 * Route /admin/contact/
 */

const router = require('express').Router()
const {
    getAllContact,
    removeContact
} = require('../../controller/admin/contactController')

router.get('/all', getAllContact)
router.delete('/delete/:id', removeContact)

module.exports = router