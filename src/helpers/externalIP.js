var Request = require("request");
var MyIP="127.0.0.1";

async function lookup_IP() {

  var prom = new Promise(function (resolve, reject) {
    Request.get(
      {
        url: "http://api.ipify.org"
      },
      function (error, response, body) {
        if (error) {
          console.error(error);
          setTimeout(
            () => {
              lookup_IP();
            }, 1000
          )
        } else {
          //console.log(body);
          MyIP=body;
        }
        resolve(MyIP);
      }
    );
  });

  await prom;
  return MyIP; 
}

// Promise Resolve - Probably Could be better!

module.exports.IP=lookup_IP;
