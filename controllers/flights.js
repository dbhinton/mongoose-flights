const Flight = require("../models/flight")

module.exports = {
    new: newFlight,
    flightSchedule,
    create,
    show
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "New Flights"
    })
}

function flightSchedule(req, res) {
    Flight.find({}, function (err, flightArr) {
        console.log(flightArr, " <- flight documents"); // if this isn't working log out the error
        res.render("flights/index", {
            flightArr: flightArr, // <-- remember the key is the variable name in movies/index
            title: "Listed Flights"
        });
    }).sort({ created: 'desc' });
}

function create(req, res) {
    // req.body.flightNo = parseInt(req.body.flightNo)
    Flight.create(req.body, function (err, addedFlight) {
        console.log(req.body)
        if (err) {
            console.log(err)
            return res.redirect("/flights/new")
        }
        console.log(addedFlight, "<---added flight")
        res.redirect("/flights");

    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, selectedFlight){
        res.render("flights/show", {title: "Flight", selectedFlight})
    });
}

