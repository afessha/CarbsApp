var mongoclient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://awet:Shirba94@cluster0-ulesp.mongodb.net/carbsDB?retryWrites=true";
var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var path = require("path");
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static("public"));

//posting
app.post("/users", urlencodedParser, function(req, res) {
  res.send("Data recieved");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.confirm);
  mongoclient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("succesfull connection");
    var database = db.db("carbsDB");
    var obj = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      confirm: req.body.confirm
    };
    database.collection("users").insertOne(obj, function(err, result) {
      if (err) throw err;
      console.log("Data has been added");
    });
  });
});
app.get("/", function(req, res) {
  res.send("Hello my server is working");
  console.log("The server is running at port " + port);
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
