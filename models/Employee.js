const { Model, DataTypes } = require("sequelize");
const { Employee } = require(".");
const sequelize = require("../config/connection");


Employee.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        first_name:{
            type:DataTypes.STRING,
        },
        last_name:{
            type:DataTypes.STRING,
        },
        employee_id:{
            type:DataTypes.INTEGER,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8]
            }
        },

    }
)