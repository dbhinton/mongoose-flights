const Flight = require("../models/flight")

module.exports = {
    new: newFlight,
    index,
    create
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "New Flights"
    })
}

function index(req, res) {
    Flight.find({}, function (err, flightArr) {
        console.log(flightArr, " <- flight documents"); // if this isn't working log out the error
        res.render("flights/index", {
            flightArr: flightArr, // <-- remember the key is the variable name in movies/index
            title: "Listed Flights"
        });
    });
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

