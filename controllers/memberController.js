Member = require('../models/memberModel.js');

teamController = require('./teamController.js');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.create_member_get = [
    (req, res) => {
        console.log("accessing create_member_get");
        res.render('./form', {errors: []});
    }
]

exports.successful_post = [
    (req, res) => {
        res.render('./success');
    }
]

exports.create_member_post = [

    // Validate Fields
    body('username').isLength({min:1}).trim().withMessage("Username must be specified")
        .isAlphanumeric().withMessage('First name has non alphanumeric characters.'),
    body('name').isLength({min:1}).trim().withMessage("Name must be specified")
        .isAlphanumeric().withMessage('Name has non alpha numeric characters'),

    // Sanitize Fields
    sanitizeBody('name').trim().escape(),
    sanitizeBody('username').trim().escape(),

    // Process Request
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty) {
            res.render('./join', {errors: errors });
            return;
        } else {
        // Create New Member

        var member = new Member({
            event: req.body.event,
            username: req.body.username,
            name: req.body.name,
            language: req.body.technology,
            teamSize: req.body.teamsize,
            projectType: req.body.project,
            email: req.body.email
        });

        member.save(function (err){
            if (err) { 
                errors = ["just didnt work out.."]
                return res.render('./form', {errors: errors});
            } else {
                console.log("stuck in the controller");
                res.send("yeah didnt work out");
                teamController.attemptTeamFormation();
            }
            res.redirect('./finished')
        })

        }


    }
]