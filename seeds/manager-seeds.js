const { Manager } = require("../models");

const managerData = [
    {
        ManagerID:"8787",
        password:"password123",

    },
];
const seedManagers = () =>
    Manager.bulkCreate(managerData,{individualHooks: true});

module.exports = seedManagers;