const express = require("express");
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.post("/cb", (req, res) => {
  //console.log(req.body.body);
  res.status(200).send("hit the mpesa info endpoint");
});

app.listen(3001, () => {
  console.log("Server started and listening on port 3001");
});
