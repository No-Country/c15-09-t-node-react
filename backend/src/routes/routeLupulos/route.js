const express = require('express')
const router = express.Router()

const controllersLupulos = require('../../controllers/controllerLupulos')

router.get('/mostrarLupulos', controllersLupulos.infoLupulos)
router.post('/crearLupulos', controllersLupulos.CreateLupulos)

module.exports = router
