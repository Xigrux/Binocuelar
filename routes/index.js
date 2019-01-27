var express = require('express');
var router = express.Router();

/* Import Controllers */
var memberpages = require('../controllers/memberController.js');

/* Create Members */
router.get('/join', memberpages.create_member_get);
// router.post('/submitMember', memberpages.create_member_post);
router.get('/finished', memberpages.successful_post)

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/join', 301);
});

module.exports = router;
