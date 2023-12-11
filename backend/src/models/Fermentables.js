const { DataTypes } = require('sequelize')
//const maltas = require('./Maltas')

module.exports = (dataBase) => {


    const fermentables = dataBase.define('Fermentables', {
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
        potential:{
            type: DataTypes.DECIMAL,
            allowNull: false 

        },
        amount:{ 
            type: DataTypes.DECIMAL,
            allowNull: false 

        },
        color: {
            type: DataTypes.DECIMAL,
            allowNull: false 

        }
        
        
        
        /*,   
        maltasId:{

            type:DataTypes.INTEGER,
            references:{

                model:maltas,
                key:'maltas_id'


            }


        },*/  
        
    }, {timestamps: false})

    //tiene una malta
    //fermentables.belongsTo(maltas, { foreignKey: 'maltasId' });

  return fermentables
}
