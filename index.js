const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome back to my application!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is info api, working fine! success");
});

app.listen(80, () => {
  console.log("listening on 80");
});
