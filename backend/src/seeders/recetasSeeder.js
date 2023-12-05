require('dotenv').config()
const { Sequelize } = require('sequelize')
const { USER, PASS, HOST } = process.env
const url = `postgres://${USER}:${PASS}@${HOST}/cervezaNC`
// sample data
const { sampleLevaduras, sampleLupulos, sampleMaltas, stylesDB } = require('../seeders/sampleData')

// Models
const modelMalta = require('../models/Maltas')
const modelLupulo = require('../models/Lupulos')
const modelLevadura = require('../models/Levaduras')
const modelEstilos = require('../models/Estilos')

async function recetasSeeder () {
  // String de Conexión con la base de datos
  const seedDataBase = new Sequelize(
    url, {
      logging: true,
      native: false
    }
  )

  modelMalta(seedDataBase)
  modelLupulo(seedDataBase)
  modelLevadura(seedDataBase)
  modelEstilos(seedDataBase)

  const { Maltas, Lupulos, Levaduras, Estilos } = seedDataBase.models

  try {
    // Sincronización con la BD
    await seedDataBase.sync({ force: false })

    // Insertar datos
    const resultadoMaltas = await Maltas.bulkCreate(sampleMaltas)
    const resultadoLupulos = await Lupulos.bulkCreate(sampleLupulos)
    const resultadoLevaduras = await Levaduras.bulkCreate(sampleLevaduras)
    const resultadoEstilos = await Estilos.bulkCreate(stylesDB)

    console.log(resultadoMaltas, resultadoLevaduras, resultadoLupulos, resultadoEstilos)
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    // Cerrar conexión
    await seedDataBase.close()
  }
}

recetasSeeder()
