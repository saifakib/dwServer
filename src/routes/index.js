const router = require('express').Router()


router.get('/', (req, res) => res.send('jfkdfsngjk'))

router.get('*', (req, res) => {
    res.status(404).json({ msg: '404 not found'})
})




module.exports = router;