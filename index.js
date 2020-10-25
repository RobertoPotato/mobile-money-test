const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.get("/mPesaCBInfo", (req, res) => {
  console.log(req.body.body);
});

app.listen(3001, () => {
  console.log("Server started and listening on port 3001");
});
