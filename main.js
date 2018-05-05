/**
 * Created by Khang Nguyen on 04/05/2018.
 * khang.nguyen@banvien.com
 */
// Import events module
var events = require('events');
var http = require("http");
var uc = require('upper-case');

http.createServer(function (request, response) {

	if (request.url == '/event-emitter') {
			// Create an eventEmitter object
			var eventEmitter = new events.EventEmitter();

			// Create an event handler as follows
			var connectHandler = function connected() {
				console.log('connection succesful.');

				// Fire the data_received event
				eventEmitter.emit('data_received');
			}

			// Bind the connection event with the handler
			eventEmitter.on('connection', connectHandler);

			// Bind the data_received event with the anonymous function
			eventEmitter.on('data_received', function(){
				console.log('data received succesfully.');
			});

			// Fire the connection event
			eventEmitter.emit('connection');

			console.log("Program Ended.");
	}else{
		// Send the HTTP header
		// HTTP Status: 200 : OK
		// Content Type: text/plain
		response.writeHead(200, {'Content-Type': 'text/html'});

		response.write(request.url + '\n');
		// Send the response body as "Hello World"
		response.write(uc('Hello World'));
	}

	response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');