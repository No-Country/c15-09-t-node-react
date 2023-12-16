const { Router } = require('express')
const router = Router()

const EstilosController = require('../controllers/controllerEstilos')

router.get('/estilos', EstilosController.getAllEstilos)

module.exports = router
