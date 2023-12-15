const { Estilos } = require('../db')

module.exports = {

  getAllEstilos: async () => {
    const estilos = await Estilos.findAll()

    if (estilos.length === 0) {
      return 'There are not estilos in the Data Base'
    }
    return estilos
  }

}
