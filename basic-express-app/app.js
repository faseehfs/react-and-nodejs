const express = require("express");

const app = express();
const port = 3000;

// Routes

app.get("/", (req, res) => {
  res.send("You send a GET request.");
});

app.post("/", (req, res) => {
  res.send("You send a POST request.");
});

app.put("/", (req, res) => {
  res.send("You send a PUT request.");
});

app.delete("/", (req, res) => {
  res.send("You send a DELETE request.");
});

// get, post, put, and delete are methods which registers a route handler.
// First parameter: The route.
// Second parameter: The function to be called when the route matches.

// end Routes

app.listen(port, () => {
  console.log(`app.js: Listening on port ${port}.`);
});
