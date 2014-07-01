var express = require('express');
var port = process.env.PORT || 5000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public/'));
}).listen(port);


/*function initTwitter(str){
	var Twitter = require('./lib/twitter').Twitter;
	var fs = require('fs');
	var twitter;
    var config;
    
    config = JSON.parse(fs.readFileSync('./props/properties.json', encoding="ascii"));
	twitter = new Twitter(config);
	twitter.getFriends({ screen_name: str, count: '1000'});	
}

function initFacebook(){
	var Facebook = require('facebook-node-sdk');
	var facebook = new Facebook({ appID: '563552957086530', secret: '1d9ffbe5d652b2a1d0a09fd735f356b0' });

	facebook.api('/amachang', function(err, data){
		console.log('data', data);
	});
}*/

//initFacebook();
//initTwitter('shoulty');