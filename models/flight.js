const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destSchema = new mongoose.Schema({
	airport: String,
	arrival: Date
  }, {
	timestamps: true
  });


const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations : [destSchema]
},
{
    timestamps: true
})

module.exports = mongoose.model("Flight", flightSchema);