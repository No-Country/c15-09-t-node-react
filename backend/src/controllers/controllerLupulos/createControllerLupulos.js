const modelLupulos = require('../../models/Lupulos')

exports.createLupulos = async (req, res) => {
  const { name, alpha } = req.body
  try {
    const lupulo = await modelLupulos.create({ name, alpha })
    res.status(201).json(lupulo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error al crear el registro de Lupulos' })
  }
}
