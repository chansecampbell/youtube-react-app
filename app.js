var express = require("express");
var app = express();
var environment = app.get('env');
var port = process.env.PORT || 3000;

if('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(express.static(__dirname + "/dist"));

app.get("/*", function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, function(){
  console.log("Express is alive and kicking on port " + port);
});

module.exports = app;