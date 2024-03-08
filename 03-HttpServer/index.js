const http = require("http");
const jsonData = require("./data/data.json");

const PORT = "8081";

http
  .createServer(function (request, response) {
    console.log("Server is Running OnPort:" + PORT);
    response.write(JSON.stringify(jsonData)); // it will show on browser
    response.end();
  })
  .listen(PORT);

//   http://localhost:8081/ for use front end
// or 
//   http://yourIpAddress:8081/ for use front end

// link 
// ipconfig Ipv4 Address ---> Your Ip Address
