const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
    dataBase.define('Fermentables', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },     
        
    }, {timestamps: false})
}