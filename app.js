var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 8080;
app.get("/", function(req, res) {
  res.send("Hello my server is working");
  console.log("The server is rrunning at port " + port);
});

//Route to handle the path (/home)
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname + "/home.html"));
});

//Route to handle the path (/food)
app.get("/food", function(req, res) {
  res.sendFile(path.join(__dirname + "/food.html"));
});

//Route to handle the path (/login)
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname + "/login.html"));
});

//Route to handle the path (/register)
app.get("/register", function(req, res) {
  res.sendFile(path.join(__dirname + "/register.html"));
});

//Route to handle the path (/contact)
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname + "/contact.html"));
});
app.listen(port);
