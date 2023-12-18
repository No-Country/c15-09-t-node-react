const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const fermentables = dataBase.define('Fermentables', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false

    }

  }, { timestamps: false })

  return fermentables
}
