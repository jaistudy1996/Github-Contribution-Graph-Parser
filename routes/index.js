var express = require('express');
var request = require('request');
var router = express.Router();
var htmlParser = require('htmlparser');


/* GET home page. */
router.get('/', function(req, res, next) {
	request('https://github.com/users/jaistudy1996/contributions', function(error, response, body){
		if(error){
			console.log(error);
		}
		// console.log(response);
		var handler = new htmlParser.DefaultHandler(function(error, dom){
			if(error){
				console.log(error);
			}
			else{
				return dom;
			}
		});
		var parser = new htmlParser.Parser(handler);
		parser.parseComplete(body);
		console.log(handler.dom[0].children[1].children[1].children[1]);
		// console.log(body);
		res.render('index', { title: 'Express', data: handler.dom[0].children[1].children[1]});
	});
});

module.exports = router;
