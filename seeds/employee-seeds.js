const { Employee } = require("../models");

const employeeData =[
    {
        id:"1",
        first_name:"Jose",
        last_name:"Smith",
        address: "gold hill rd",
        houseNumber:"654",
        zipcode: "29876",
        city:"zippy",
        employee_id:"9383",
        password:"password12345"
    },
    {
        id:"2",
        first_name:"Marie",
        last_name:"Cross",
        address: "silver hill rd",
        houseNumber:"684",
        zipcode: "29877",
        city:"main",
        employee_id:"3456",
        password:"password1234"
    },
    {
        id:"3",
        first_name:"Alex",
        last_name:"Garcia",
        address: "ruby hill dr",
        houseNumber:"776",
        zipcode: "29878",
        city:"zippy",
        employee_id:"7765",
        password:"password12"
    },
    
];

const seedEmployees = () =>
  Employee.bulkCreate(employeeData, { individualHooks: true });
  
module.exports = seedEmployees;