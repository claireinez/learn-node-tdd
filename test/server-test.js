var test = require('tape');
var Shot = require('shot');
var server = require('../server.js');

test('server is running', function (t) {
	Shot.inject(server, {method: 'GET', url: "/"}, function (res) {
		t.equal(res.statusCode, 200, "Congrats, server is running");
		t.end();
	});
});