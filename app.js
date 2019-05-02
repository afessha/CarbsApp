var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.get("/", function(req, res) {
  res.send("Hello my server is working");
  console.log("The server is rrunning at port " + port);
});

//Route to handle the path (/food)
app.get("/food", function(req, res) {
  res.send("food");
});

//Route to handle the path (/home)
app.get("/home", function(req, res) {
  res.send("home");
});
//Route to handle the path (/login)
app.get("/login", function(req, res) {
  res.send("login");
});

//Route to handle the path (/register)
app.get("login", function(req, res) {
  res.send("register");
});

//Route to handle the path (/contact)
app.get("login", function(req, res) {
  res.send("contact");
});
app.listen(port);
