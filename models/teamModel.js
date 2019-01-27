var mongoose = require('mongoose');
var Member = require('./memberModel.js');

var teamSchema = mongoose.Schema({
    event : { type: String, required: true},
    members : [{type: mongoose.Schema.Types.ObjectId, ref:'Member'}]
});

var Team = mongoose.model("team", teamSchema)

module.exports = Team;

module.exports.get = function (callback, limit) {
    Team.find(callback).limit(limit);
}
