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

router.post('/join', function(request, response){
  console.log(request.body.user.name);
  console.log(request.body.user.email);
});

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);