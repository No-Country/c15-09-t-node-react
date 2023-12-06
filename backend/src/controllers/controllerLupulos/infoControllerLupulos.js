const { Lupulos } = require('../../db')

exports.infoLupulos = async (req, res) => {
  try {
    const lupulos = await Lupulos.findAll()
    res.status(200).json(lupulos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error al obtener los registros de la tabla Lupulos' })
  }
}
