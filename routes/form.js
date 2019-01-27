var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');


const sendGrid = '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';

sgMail.setApiKey(sendGrid);

// router.get('/', function(req, res, next) {
//   res.render('form', { 
//     title: 'Binocuelar',
//     event: 'placeholder'
//   });
// });

module.exports = router;
let emailAddress;
router.post('/join', function(req, res){
  emailAddress = req.body.email;
});


$('#sendEmail').click(function(){
  console.log('button clicked');
  sgMail.send(msg);
});


const msg = {
  to: emailAddress,
  from: 'xing.jingyuan@outlook.com',
  subject: 'Here is you team',
  html: '<strong>Have fun at the hackathon</strong>',
};