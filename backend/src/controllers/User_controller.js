const { registerUser } = require('../Services/User_services')

const register = async (req, res) => {
  try {
    const { usuario, email, password, comfirmpass } = req.body

    // Validación de datos
    if (!usuario || !email || !password || !comfirmpass) {
      return res.status(400).json({ message: 'Por favor, proporciona todos los campos requeridos.' })
    }
    const result = await registerUser(usuario, email, password, comfirmpass)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  register
}
