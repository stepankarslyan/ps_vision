var zmq = require("zmq");

var requester = zmq.socket("asyncreq");
requester.connect("tcp://localhost:5559");
console.log("Connecting to the localhost 5559...");

var requester_1 = zmq.socket("asyncreq");
requester_1.connect("tcp://localhost:4141");
console.log("Connecting to the localhost 4141...");

module.exports = {
  
  get: function(req, res) {
    requester.send(JSON.stringify({type: "get"}), function(response) {
      console.log("data sent from responder: ", response);
      res.send(response);
    });
  },
   
  remove: function(req, res) {
    
    requester_1.send(JSON.stringify({type: "delete", pid: req.params.pid}), function(response) {
    console.log("news from killer: " + response.toString());
    res.send(response);  
    });
  }
  
};
