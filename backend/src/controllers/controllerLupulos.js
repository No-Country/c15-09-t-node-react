const LupulosService = require('../Services/serviceLupulos')

const LupulosControllers = {

  getAllLupulos: async (req, res) => {
    try {
      const lupulos = await LupulosService.getAllLupulos()
      res.status(200).json(lupulos)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  },

  createLupulos: async (req, res) => {
    try {
      const { name, alpha } = req.body
      const lupulo = await LupulosService.create({ name, alpha }).then(lupulo => {
        res.status(201).json({ lupulo, message: 'lupulo creado' })
      })
      res.status(201).json(lupulo)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'error al crear el registro de Lupulos' })
    }
  }

}

module.exports = LupulosControllers
