const mongoose = require('mongoose');



const flightSchema = new mongoose.Schema({
    airline: {type: String, enum: ['America', 'Delta','Southwest','United']},
    airport: {type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX','SAN'], default: "DEN"},
    flightNo: {type: Number, required: true},
    departs: {type: Date}
},
{
    timestamps: true
})

module.exports = mongoose.model("Flight", flightSchema);