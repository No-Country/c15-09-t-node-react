const { User } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'cervezaNC'

const registerUser = async (email, password, usuario, comfirmpass) => {
  try {
    let passCript
    if (password.length >= 6) {
      passCript = bcrypt.hashSync(password, 10)
    } else {
      passCript = password
    }

    const user = await User.create({
      usuario,
      email,
      password: passCript,
      comfirmpass
    })
    //! ------------ TOKEN ------------------------
    if (user) {
      const token = jwt.sign({ user }, secretKey, {
        expiresIn: '7d'
      })
      res.json({
        user,
        token
      })
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  registerUser
}
