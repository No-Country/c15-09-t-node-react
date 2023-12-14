const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  dataBase.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmpass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googlePass: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, { timestamps: false })
}
