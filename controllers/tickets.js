const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  newTicket
//   create,
//   addToCast
};

function newTicket(req, res){
    Ticket.find({}, function(err, allTickets){
        console.log(allTickets)
        res.render("tickets/new", {
            title: "Tickets",
            allTickets
        })
    })
}
