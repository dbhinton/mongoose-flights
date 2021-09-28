var express = require('express');
var router = express.Router();
const flightsCtrl = require("../controllers/flights");
const destinationsCtrl = require("../controllers/destinations");

/* GET users listing. */
router.get("/", flightsCtrl.flightSchedule);
router.get("/new", flightsCtrl.new);
router.get("/:id", flightsCtrl.show);
router.post("/", flightsCtrl.create);
router.post('/:id', destinationsCtrl.create);

module.exports = router;
