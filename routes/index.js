var express = require('express');
var request = require('request');
var router = express.Router();
var jsdom = require('jsdom');

const { JSDOM } = jsdom;

/* GET home page. */
router.get('/', function(req, res, next) {
	request('https://github.com/users/jaistudy1996/contributions', function(error, response, body){
		if(error){
			console.log(error);
		}
		const dom = new JSDOM(body, { includeNodeLocations: true });
		// console.log(body);
		for(var i=0; i<53; i++){
			for(var j=0; j<7; j++){
				try{
					console.log(i, dom.window.document.querySelector('svg').children[0].children[i].children[j]);
				}
				catch(error){
					console.log(error);
				}
			}
		}
		res.render('index', { title: 'Express', data: 'hello'});
	});
});

module.exports = router;
