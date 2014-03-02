// web.js
var express = require("express");
var logfmt = require("logfmt");
var data = require('./data');

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));

app.get("/:id([0-9]+)", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    
    console.log("in id route");
    console.log(req.params.id);
    
    if (req.params.id in data.beacon2art) {
        var result = data.beacon2art[req.params.id]
        res.send(JSON.stringify(result));
    } else {
        res.send(JSON.stringify({err : "not found"}));
    }
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});