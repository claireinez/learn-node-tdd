

var tape = require('tape');
var shot = require('shot');
var handler = require('../server.js');



tape("check to see if the server is running ok", function (t) {

  shot.inject(handler, {method: 'get', url: '/'},function(res){
    var result = res.statusCode;
    t.equal(result, 200, "success!");
    t.end();
  });
});

// tape("Post request takes user to postatmebro", function (t) {
//
//   shot.inject(handler, {method: 'post', url: '/post-at-me-bro'},function(res){
//     var result = res.statusCode;
//     t.equal(result, 200, "success!");
//     t.end();
//   });
// });
// 
// tape("Is the name of the person in H1 tag being returned in the URL after /name/(NAME OF PERSON)", function(t){
//
//   // var url = request.url;
//   // var name = url.split('/')[2].toString();
//   shot.inject(handler, {method: 'get', url: '/name/sohil/'},function(res){
//     var result = (res.payload.indexOf('<h1>sohil</h1>') !== -1);
//     // var documentName = document.getElementsByTagName('h1').innerText;
//     t.equal(result,true, "success!");
//     t.end();
//   });
// });
