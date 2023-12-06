const express = require('express')
const router = express.Router()

const infoControllerLupulos = require('../../controllers/controllerLupulos/infoControllerLupulos')
const createControllerLupulos = require('../../controllers/controllerLupulos/createControllerLupulos')

router.get('/mostrarLupulos', infoControllerLupulos.infoLupulos)
router.post('/crearLupulos', createControllerLupulos.createLupulos)

module.exports = router
