const { Router } = require('express')
const router = Router()
const loginControllers = require('../controllers/controllerLogin')

router.post('/', loginControllers.loginFunction);

module.exports = router;