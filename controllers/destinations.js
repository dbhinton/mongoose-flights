const Flight = require('../models/flight')
// flight <- is our Model that can talk to the db

module.exports = {
	create
}


function create(req, res){
	console.log(req.body)
	Flight.findById(req.params.id, function(err, selectedFlight){
		if(err){
			console.log(err)
			res.send(err)
		}
		console.log(selectedFlight)
		selectedFlight.destinations.push(req.body);
		selectedFlight.save(function(err){
				console.log(err)
				res.redirect(`/flights/${req.params.id}`);
		});	
    });
}