const express = require("express");
const router = express.Router();

const userIsAuthenticated = true; // Dummy.
const userIsBanned = false; // Dummy.
const userIsUnder18 = false; // Dummy.

// Middleware 1:
router.use((req, res, next) => {
  if (!userIsAuthenticated) {
    return res.status(401).json({ error: "Not authenticated." });
  }

  next(); // Important (why?).
});

// Middleware 2 (ran after the first):
router.use((req, res, next) => {
  if (userIsBanned) {
    return res.status(401).json({ error: "You are banned." });
  }

  next(); // This hands control to the next middleware or route handler.
});

// Middleware specific for routes starting with "/signup".
router.use("/signup", (req, res, next) => {
  if (userIsUnder18) {
    return res.status(401).json({ error: "You are under 18." });
  }

  next(); // Without this, the client will wait until timeout.
});

// The routes are protected by the Middlewares.

router.get("/", (req, res) => {
  res.json({
    message: "Hello user!",
  });
});

router.get("/login", (req, res) => {
  res.json({
    message: "Login is under development.",
  });
});

router.get("/signup", (req, res) => {
  res.json({
    message: "Signup is under development.",
  });
});

module.exports = router; // Important (why?).
