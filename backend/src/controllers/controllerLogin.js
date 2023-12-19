// controllerLogin.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { addGooglePass, verifyLocalPassword, tokenLogin, verifyTokenSession } = require('../Services/serviceLogin');
const { createCookie } = require('../Services/serviceLogin'); // Importa la función createCookie


const loginControllers = {
  loginFunction: async (req, res) => {
    const { email, password, googlePass } = req.body;
  
    try {
      let user;

      if (googlePass) {
        // Si es un inicio de sesión con Google
        user = await addGooglePass(email, googlePass);
        if (!user) {
          throw new Error('Credenciales inválidas');
        }
      } else {
        // Si es un inicio de sesión local
        user = await verifyLocalPassword(email, password);
      }

      // Generar token de sesión
      const token = tokenLogin(user);

      // Llama a la función para crear la cookie
      createCookie(res, token);

      res.status(200).json({ usuario: user.usuario, email: user.email, token: token });

    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },
    // Agrega una función para verificar el token de sesión
  verifyToken: async (req, res) => {
    const token = req.cookies.jwt;

    try {
      const decodedToken = verifyTokenSession(token);
      res.status(200).json({ userId: decodedToken.userId, email: decodedToken.email });
    } catch (error) {
      res.status(401).json({ error: 'Token no válido' });
    }
  }
}

module.exports = loginControllers