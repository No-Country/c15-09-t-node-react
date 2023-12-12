const { Lupulos } = require('../db')

const LupulosServices = {

  getAllLupulos: async () => {
    const lupulos = await Lupulos.findAll()

    if (lupulos.length === 0) {
      return 'There are not users in the Data Base'
    }
    return lupulos
  },

  createLupulos: async (name, alpha) => {
    try {
      const lupulo = await Lupulos.create({ name, alpha })
      console.log(lupulo)
    } catch (error) {
      console.error(error)
      throw new Error('Error at creating lupulo')
    }
  }

}
module.exports = LupulosServices
