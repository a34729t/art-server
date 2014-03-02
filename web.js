// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/^\d+$/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1, b: 2 }));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
