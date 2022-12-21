const express = require("express");
const path = require("path");
// const test = require("./Router/test");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.send("hello");
});

app.get("*", (req, res) => {
  res.send(express.static(path.join(__dirname, "../client/build/index.html")));
});

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
