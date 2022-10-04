const { Employee } = require("../models");

const employeeData =[
    {
        id:"1",
        first_name:"Jose",
        last_name:"Smith",
        employee_id:"9383",
        password:"password12345"
    },
    {
        id:"2",
        first_name:"Marie",
        last_name:"Cross",
        employee_id:"3456",
        password:"password1234"
    },
    {
        id:"3",
        first_name:"Alex",
        last_name:"Garcia",
        employee_id:"7765",
        password:"password12"
    },
    
];

const seedEmployees = () =>
  Employee.bulkCreate(employeeData, { individualHooks: true });
  
module.exports = seedEmployees;