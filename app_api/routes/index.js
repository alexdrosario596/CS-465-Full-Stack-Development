const express = require('express'); //Express app
const router = express.Router(); //Router logic
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

//This is where we import thr controllers we will route
const tripsController = require('../controllers/trips');

const authController = require('../controllers/authentication');

router
    .route('/login')
    .post(authController.login);

route
    .route('/register')
    .post(authController.register);

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET Method routes tripList
    .post(auth, tripsController.tripsAddTrip); //

router
    .route('/trip/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
    

module.exports = router;