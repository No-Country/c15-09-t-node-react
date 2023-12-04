const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  const Estilos = dataBase.define('Estilos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    version: {
      type: DataTypes.DOUBLE
    },
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    category_id: {
      type: DataTypes.STRING
    },
    style_id: {
      type: DataTypes.STRING
    },
    category_description: {
      type: DataTypes.TEXT
    },
    overall_impression: {
      type: DataTypes.TEXT
    },
    aroma: {
      type: DataTypes.TEXT
    },
    appearance: {
      type: DataTypes.TEXT
    },
    flavor: {
      type: DataTypes.TEXT
    },
    mouthfeel: {
      type: DataTypes.TEXT
    },
    comments: {
      type: DataTypes.TEXT
    },
    history: {
      type: DataTypes.TEXT
    },
    style_comparison: {
      type: DataTypes.TEXT
    },
    tags: {
      type: DataTypes.STRING
    },
    original_gravity_min: {
      type: DataTypes.DOUBLE
    },
    original_gravity_max: {
      type: DataTypes.DOUBLE
    },
    ibu_min: {
      type: DataTypes.INTEGER
    },
    ibu_max: {
      type: DataTypes.INTEGER
    },
    final_gravity_min: {
      type: DataTypes.DOUBLE
    },
    final_gravity_max: {
      type: DataTypes.DOUBLE
    },
    abv_min: {
      type: DataTypes.DOUBLE
    },
    abv_max: {
      type: DataTypes.DOUBLE
    },
    color_min: {
      type: DataTypes.DOUBLE
    },
    color_max: {
      type: DataTypes.DOUBLE
    },
    ingredients: {
      type: DataTypes.TEXT
    },
    examples: {
      type: DataTypes.STRING
    },
    style_guide: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  })
  return Estilos
}
