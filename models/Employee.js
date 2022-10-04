const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

class Employee extends Model {}
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
            allowNull: false,
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        employee_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8]
            }
        },
        hooks: {
            async beforeCreate(newEmployeeData) {
              newEmployeeData.password = await bcrypt.hash(
                newEmployeeData.password,
                10
              );
              return newEmployeeData;
            },
      
            async beforeUpdate(updatedEmployeeData) {
              updatedEmployeeData.password = await bcrypt.hash(
                updatedEmployeeData.password,
                10
              );
              return updatedEmployeeData;
            },
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: "employee",
    }
);

module.exports = Employee;