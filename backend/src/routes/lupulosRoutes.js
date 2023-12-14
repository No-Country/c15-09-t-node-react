const { Router } = require('express')
const router = Router()
const LupulosController = require('../controllers/controllerRecetas')

router.get('/getLupulos', LupulosController.getAllLupulos)
router.post('/registerLupulos', LupulosController.createLupulos)

module.exports = router
