const EstilosService = require('../Services/serviceEstilos')

module.exports = {

  getAllEstilos: async (req, res) => {
    try {
      const estilos = await EstilosService.getAllEstilos()
      res.status(200).json(estilos)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  }
}
