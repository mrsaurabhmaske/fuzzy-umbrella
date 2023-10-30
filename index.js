const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("Hello Users!");
});

app.get("/posts", (req, res) => {
  res.send("Hello Posts!");
});

app.get("/comments", (req, res) => {
  res.send("Hello Comments!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
