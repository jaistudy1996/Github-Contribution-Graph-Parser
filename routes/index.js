var express = require('express');
var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	request('https://github.com/users/jaistudy1996/contributions', function(error, response, body){
		console.log(error);
		console.log(response);
		console.log(body);
	});
  res.render('index', { title: 'Express' });
});

module.exports = router;
