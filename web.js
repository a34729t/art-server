// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var data = {
    "1507110507": {},
    "4556564072": {},
    "6046356367": {},
    "4967229621": {},
    "54450962": {},
    "236807349": {}
};

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get(':id(/^\d+$/)', function(req, res) {
    var result = data[id]
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
