const modelLupulos = require('../../models/Lupulos')

exports.CreateLupulos = async (req, res) => {
  const { amount, use, time, ibu, alpha } = req.body
  try {
    const lupulo = await modelLupulos.create({ amount, use, time, ibu, alpha })
    res.status(201).json(lupulo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error al crear el registro de Lupulos' })
  }
}
