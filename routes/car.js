var express = require('express');
var router = express.Router();

const CarController = require('../controller/CarController')

/* GET users listing. */
router.get('/', CarController.getAllCars);

module.exports = router;
