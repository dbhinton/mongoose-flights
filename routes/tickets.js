var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get("/new", ticketsCtrl.newTicket);

module.exports = router;