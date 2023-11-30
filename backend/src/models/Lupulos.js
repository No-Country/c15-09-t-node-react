const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {


    dataBase.define('Lupulos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.DECIMAL,
            allowNull: false 
        },
        tiempo:{

        },
        tipoLupuloId:{

        },
        lupuloId:{

            type:DataTypes.INTEGER,
            field: 'lupulo_id'


        },
        
    }, {timestamps: false})


}