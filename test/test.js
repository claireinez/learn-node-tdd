var Test = require('tape');
var Shot = require('shot');

var server = require('../server.js');

Test("check 1 is equal to 1", function(t) {
  t.equal(1, 1, "success");
  t.end();
});

Test('check server returns status code 200', function(t) {
  var result, expected;
  Shot.inject(server.handler, {method: 'get', url: '/'}, function (res) {
    result = res.statusCode;
    expected = 200;
    t.equal(result, expected, 'woop');
    t.end();
  });
});

Test('check server returns status code 404', function(t) {
  var result, expected;
  Shot.inject(server.handler, {method: 'get', url: '/koala'}, function (res) {
    result = res.statusCode;
    expected = 404;
    t.equal(result, expected, 'derp');
    t.end();
  });
});
