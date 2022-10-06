const router = require('express').Router();

const managerRoutes = require('./manager-routes');


router.use('/manager', managerRoutes);





module.exports = router;
