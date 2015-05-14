var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.DEV_PORT || 3001;

var server = app.listen(PORT, function(){
	process.stdout.write("listening on " + PORT + ", serving: " + path.join(__dirname, '../build/\n'));
});

var home = express.Router();

home.get('/',function(req, res, next){
	process.stdout.write("request logged \n");	
	res.send('Howdy there!');
});

app.use('/',home);

app.listen(3000);
