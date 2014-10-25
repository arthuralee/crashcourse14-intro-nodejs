// include the HTTP node module
var http = require("http");

// our "data" - array of users
var users = [
  {
    id: 99,
    name: "Arthur",
    email: "arthur@arthurlee.me"
  },
  {
    id: 201,
    name: "John",
    email: "john@example.com"
  }
];

// create HTTP server that responds to requests
var server = http.createServer(function (req, res) {

  // tokenize path
  var url = req.url.split("/");

  if (url[1] === 'users') {
    if (req.method === 'GET') {
      if(url[2]) { // id was specified
        for (var i=0; i<users.length; i++) {
          if (users[i].id == url[2]) return res.end(JSON.stringify(users[i]));
        }
        return res.end("User not found");
      } else { // get all users
        return res.end(JSON.stringify(users));
      }
    }
  }

  return res.end("Command not found");
});

// Bind the server to listen on port 8080
server.listen(8080);