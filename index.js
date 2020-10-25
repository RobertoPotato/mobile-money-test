const express = require("express");
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.post("/cb", (req, res) => {
  console.log("callback Endpoint has been hit");
  //console.log(req.body.Body);
  res.status(200).send("OK");
});

app.listen(3001, () => {
  console.log("Server started and listening on port 3001");
});
