const router = require('express').Router()
const {
    getAllService,
    createService,
    editService,
    removeService
} = require('../../controller/admin/serviceController')

router.get('/all', getAllService)
router.post('/create', createService)
router.patch('/edit', editService)
router.delete('/delete/:id', removeService)

module.exports = router