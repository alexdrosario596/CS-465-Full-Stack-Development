const express = require('express'); //Express app
const router = express.Router();    //Router logic

//This is where we import thr controllers we will route
const tripsController = require('../contollers/trips');

//define route for our trips endpoint
router
    .route('trips')
    .get(tripsController.tripsList); //GET Method routes tripList

module.exports = router;
