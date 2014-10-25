var express = require('express');
var bodyParser = require('body-parser');

// initialize express
var app = express();
app.use(bodyParser.json());

var users = [
  {
    id: 99,
    name: 'Arthur',
    email: 'arthur@arthurlee.me'
  },
  {
    id: 201,
    name: 'John',
    email: 'john@example.com'
  }
];


app.get('/users', function(req, res) {
  res.send(users);
});

app.get('/users/:id', function(req, res) {
  for (var i=0; i<users.length; i++) {
    if (users[i].id == req.params.id) res.send(users[i]);
  }
  res.end('User not found');
});

app.post('/users', function(req, res) {
  users.push(req.body);
  res.end('User added');
});

app.all('*', function(req, res) {
  res.end('Not supported');
});

// Bind the server to listen on port 8080
app.listen(8080);