var server = (function() {
  var http = require('http');

  var port = 8000;

  function handler(request, response) {
    if (request.url.length === 1) {
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.end('Hello world');
    } else {
      response.writeHead(404, {"Content-Type" : "text/html"});
      response.end('404: page not found');
    }
  }

  http.createServer(handler);//.listen(port);

  return {
      handler : handler
  }

}());

module.exports = server;
