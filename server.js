var argv = require("optimist").
  default({"port":"3030"}).argv;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var server = require('http').createServer(app);
server.listen(argv.port);
console.log("Server running at port " + " " + argv.port);

app.use(express.static(__dirname + "/public"));
app.use('/lib', express.static(__dirname + "/bower_components"));
app.use(bodyParser());

app.delete("/processes/:pid", function(req, res) {
  res.send("Process was killed");
});

app.get("/processes", function(req, res) {
  
  var processes = [
    { "pid":"1223",
      "id":"1",
      "name":"nodejs"
    },
    { "pid":"4556",
      "id":"2",
      "name":"mongodb"
    },
    { "pid":"7889",
      "id":"3",
      "name":"express"
    }
  ];

  res.send(processes);
});

