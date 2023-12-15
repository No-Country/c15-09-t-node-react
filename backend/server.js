require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/db')
const app = express()
const PORT = process.env.PORT || 5001
const { conn } = require('./src/db')

const ingredientesRoutes = require('./src/routes/routeIngredientes')
const userRoutes = require('./src/routes/userRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const { Estilos, Maltas } = require('./src/db')

app.use('/ingredientes', ingredientesRoutes)
app.use('/users', userRoutes)

// TEST ______________________________________________________________________________
app.get('/', (req, res) => {
  res.send('Working')
})

app.get('/styles', async (req, res) => {
  try {
    const styles = await Estilos.findAll()
    if (!styles) {
      return res.status(404).json({ message: 'not found' })
    }
    return res.status(200).json(styles)
  } catch (error) {
    console.log({ errorMessage: error.message })
    return res.status(500).json({ message: error.message })
  }
})
app.get('/malts', async (req, res) => {
  try {
    const malts = await Maltas.findAll()
    if (!malts) {
      return res.status(404).json({ message: 'not found' })
    }
    return res.status(200).json(malts)
  } catch (error) {
    console.log({ errorMessage: error.message })
    return res.status(500).json({ message: error.message })
  }
})
// END TEST ______________________________________________________________________________
conn.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server raised in port ${PORT} `)
    })
  })

connectDB()
