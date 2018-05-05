/**
 * Created by Khang Nguyen on 05/05/2018.
 * khang.nguyen@banvien.com
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// express.static to serve static files
// access: http://localhost:8081/img/image.jpg
app.use(express.static('assets'));

app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/" + "view/index.html" );
})

// GET
app.get('/process_get', function (req, res) {
	// Prepare output in JSON format
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

// POST
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/process_post', urlencodedParser, function (req, res) {
	// Prepare output in JSON format
	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
	console.log("Got a GET request for the homepage");
	res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
	console.log("Got a DELETE request for /del_user");
	res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})