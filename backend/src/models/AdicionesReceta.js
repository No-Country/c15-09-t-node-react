const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const AdicionesReceta = dataBase.define('AdicionesReceta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, { timestamps: false })

  return AdicionesReceta
}
