require('dotenv').config()
// sample data
const { sampleLevaduras, sampleLupulos, sampleMaltas, stylesDB } = require('../seeders/sampleData')
const { recepiesArray } = require('./jsonRecepieExtractor')

// Models
const modelMalta = require('../models/Maltas')
const modelLupulo = require('../models/Lupulos')
const modelLevadura = require('../models/Levaduras')
const modelEstilos = require('../models/Estilos')
const modelRecetas = require('../models/Recetas')
const { conn } = require('../db')

async function recetasSeeder () {
  modelMalta(conn)
  modelLupulo(conn)
  modelLevadura(conn)
  modelEstilos(conn)
  modelRecetas(conn)

  const { Maltas, Lupulos, Levaduras, Estilos, Recetas } = conn.models

  try {
    // Sincronización con la BD
    await conn.sync({ force: true })

    // Insertar datos
    const resultadoMaltas = await Maltas.bulkCreate(sampleMaltas)
    const resultadoLupulos = await Lupulos.bulkCreate(sampleLupulos)
    const resultadoLevaduras = await Levaduras.bulkCreate(sampleLevaduras)
    const resultadoEstilos = await Estilos.bulkCreate(stylesDB)
    const resultadoRecetas = await Recetas.bulkCreate(recepiesArray)

    console.log(resultadoMaltas, resultadoLevaduras, resultadoLupulos, resultadoEstilos, resultadoRecetas)
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    // Cerrar conexión
    await conn.close()
  }
}

recetasSeeder()
