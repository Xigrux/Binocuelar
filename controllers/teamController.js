Team = require('../models/teamModel.js');
Member = require('../models/memberModel.js');

exports.attemptTeamFormation = function() {
    var events = ["ConUHacks", "McHacks"];
    var sizes = [2, 3, 4] 
    for (i = 0; i < events.length(); i++) {

        for (x = 0; x < sizes.length(); x++) {

            Member.find({event: events[i], teamSize: sizes[x], teamed: false}, (err, members) => {
                
                var teamMates = [];
                var membersnum = members.length();
                var listIndex = 0;

                if (err) throw err;
                while (membersnum > size[x]) {

                    for (z = listIndex; z < size[x]; z++) {
                        teamMates.push(members[z]._id);
                        members[z].teamed = true;
                        Member.update({username: members[z].username}, {
                            teamed: true
                        }, (err, nums, raw) => {
                            if (err) throw err;
                        });
                    }

                    var team = new Team({
                        event: events[i],
                        members: teamMates
                    })
                    
                    team.save((err)=>{
                        if (err) throw err;

                    })

                    membersnum -= size[x];
                    listIndex += size[x];
                    teamMates = []
                }

            });

        }
    }

}

exports.sendEmail = function() {
    // TODO
}