const PORT = 4711;

const http = require('http');
const url = require('url');

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
module.exports=eventEmitter;

var server = http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(JSON.stringify(queryObject));

    if (typeof queryObject.response != "undefined") {
      eventEmitter.emit('response', queryObject.response);
    }

  }
}).listen(PORT);

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

module.exports.Port=PORT;