const express = require('express'); //Express app
const router = express.Router();    //Router logic

//This is where we import thr controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); //GET Method routes tripList
    .post(tripsController.tripsAddTrip); //

router
    .route('/trip/:tripCode');
    .get(tripsController.tripsFindByCode);
    .put(tripsController.tripsUpdateTrip);
    

module.exports = router;