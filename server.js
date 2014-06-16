var argv = require("optimist").
  default({"listen":"3333"}).argv;
var express = require("express");
var app = express();
var controller = require("./controller");
var bodyParser = require("body-parser");
var server = require('http').createServer(app);
server.listen(argv.listen);
console.log("Server running at port " + " " + argv.listen);

app.use(express.static(__dirname + "/public"));
app.use('/lib', express.static(__dirname + "/bower_components"));
app.use(bodyParser());

app.delete("/processes/:pid", controller.remove);
app.get("/processes", controller.get);
