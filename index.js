//jshint esversion:6
let express = require('express');
let app = express();

app.get('/', function(req, res){
   res.send("Hello world!everything will be ok");
});

let port = 3000;

app.listen(port);
console.log("Server is now running on port "+port);