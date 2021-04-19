const router = require('express').Router()
const admin = require('./adminRoute')
const customer = require('./customerRoute')
const {
    homeController,
    postContactController
} = require('../controller/publicController')

router.use('/admin', admin)
router.use('/customer', customer)

router.post('/contact', postContactController)
router.get('/', homeController)

router.get('*', (req, res) => {
    res.status(404).json({ msg: '404 not found'})
})

module.exports = router;