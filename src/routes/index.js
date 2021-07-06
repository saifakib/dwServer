const router = require('express').Router()
// const admin = require('./adminRoute')
// const customer = require('./customerRoute')
const auth = require('./authRoutes')
// const header = require('../utils/setHeader')
const {
    homeController,
    //postContactController
} = require('../controller/publicController')

router.use('/auth/user', auth)
// router.use('/admin', admin)
// router.use('/customer', customer)

// router.post('/contact', postContactController)
router.get('/', homeController)

// router.get('*', (req, res) => {
//     res.status(404).json({ msg: '404 not found heh e'})
// })

module.exports = router;