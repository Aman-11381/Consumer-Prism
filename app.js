const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

// home page containing an iframe that sends request request to another server to set cookies and load a script that sets a js cookie
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// another route to the site that contains a link to the home page but does not directly send to the home page but first sends to the server to set a cookie and then sends to the home page
app.get('/redirect', function(req, res){
  res.sendFile(__dirname + '/redirect.html')
});


app.listen(4000, function(){
  console.log('server 4000 has started');
});
