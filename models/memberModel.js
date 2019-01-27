var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
    event : { type: String, required: true},
    username : { type: String, required: true },
    name: { type: String, required: true},
    projectType : { type: String, required: true},
    language: { type: String, required: true},
    teamSize : { type: Number,
                 required: true, 
                 min: [2, 'too low'],
                 max: [4, 'too high'],
            },
    email : { type: String, required: true },
    teamed : { type: Boolean, default: false}
})

var Member = mongoose.model("member", memberSchema); 

module.exports = Member;

module.exports.get = function (callback, limit) {
    Member.find(callback).limit(limit);
}