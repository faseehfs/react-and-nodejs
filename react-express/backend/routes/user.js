const express = require("express");
const router = express.Router();

const userIsAuthenticated = true; // Dummy.

// Middleware for authentcation.
router.use((req, res, next) => {
  if (!userIsAuthenticated) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  next();
  // The primary purpose of next() is to pass control to the next middleware function or route handler.
});

// The routes are protected by the Middleware.

router.get("/login", (req, res) => {
  res.json({
    message: "Login is under development.",
  });
});

module.exports = router;
