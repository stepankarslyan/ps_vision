var zmq = require("zmq");
var responder = zmq.socket("asyncrep");
responder.bind("tcp://*:4040");
console.log("Binding to the port 4040...");

var processes = [
    { "pid":"17458",
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

responder.on("message", function(request, response) {
  console.log("data from requester " + request.toString());
  var message = JSON.parse(request.toString());
  if(message.type == "get")
  response.send(JSON.stringify(processes));
});


