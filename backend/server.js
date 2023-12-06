require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/db')
const app = express()
const PORT = process.env.PORT || 5001
const { conn } = require('./src/db')

const lupulosRoutes = require('./src/routes/routeLupulos/route')

app.use('/lupulos', lupulosRoutes)

app.use(express.json())

conn.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server raised in port ${PORT} `)
    })
  })

connectDB()
