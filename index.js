const express = require("express");
const app = express();
const fs = require("fs");
const url = require("url");
var util = require("util");

app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

app.post("/receive", function (request, respond) {
  var body = "";
  filePath = __dirname + "/public/data.txt";
  request.on("data", function (data) {
    body += data;
  });

  request.on("end", function () {
    fs.appendFile(filePath, body, function () {
      respond.end();
    });
  });

  respond.send({ msg: "OK" });
});

app.post("/write", (req, res) => {
  var data = req.body;

  fs.writeFile("temp.txt", util.inspect(data), (err) => {
    if (err) return console.log(err);
    console.log("Successful");
    res.send("OK");
  });
});

app.post("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.post("/cb", (req, res) => {
  console.log("callback Endpoint has been hit");
  console.log(req.body.Body);

  var data = req.body.Body;

  fs.writeFile("mpesaCB.txt", util.inspect(data), (err) => {
    if (err) return console.log(err);
    console.log("Successful");
    res.send("OK");
  });
  //res.status(200).send("OK");
});

app.listen(3001, () => {
  console.log("Server started and listening on port 3001");
});
