

var http = require('http');
var port = process.env.PORT || 8000;

function handler(request, response) {
	var url = request.url;
	//if (url.length === 1) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end("HELLO WORLD!");
	// }
	// else if (url.length === name) {
	//
	//
	//
	// }
}

//http.createServer(handler);//.listen(port); do not need it for shot.

console.log('node http server listening on http://localhost:' + port);

module.exports = handler;
