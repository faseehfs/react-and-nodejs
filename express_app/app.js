const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // get() is a method which registers a route handler
  // which calls this arrow function when the route matches "/".
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app.js: Listening on port ${port}.`);
});
