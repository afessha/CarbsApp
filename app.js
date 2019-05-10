var mongoclient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://awet:Shirba94@cluster0-ulesp.mongodb.net/carbsDB?retryWrites=true";
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use("/", function(req, res, next) {
  mongoclient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("Connection succesful");

    var database = db.db("carbsDB");
    database.collection("users").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.firstname + " " + result.lastname);
    });

    //adding new data to carbsDB database
    var obj = { firstname: "Jane", lastname: "Jack", email: "jane@hotmail.com", password: "1234", confirm: "123" }
    database.collection("users").insertOne(obj, function (err, result) {
      if (err) throw err;
      console.log("Document added to database");
    })
  });
  next();
});
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
