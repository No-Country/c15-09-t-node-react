const modelLupulos = require('../../models/Lupulos')

exports.infoLupulos = async (req, res) => {
  try {
    const lupulos = await modelLupulos.findAll()
    res.status(200).json(lupulos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error al obtener los registros de la tabla Lupulos' })
  }
}
