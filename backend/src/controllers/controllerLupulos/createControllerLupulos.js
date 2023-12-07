const { Lupulos } = require('../../db')

exports.createLupulos = async (req, res) => {
  console.log(req.body)
  const { name, alpha } = req.body

  try {
    const lupulo = await Lupulos.create({ name, alpha }).then(lupulo => {
      res.status(201).json({ lupulo, message: 'lupulo creado' })
    })
    res.status(201).json(lupulo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error al crear el registro de Lupulos' })
  }
}
