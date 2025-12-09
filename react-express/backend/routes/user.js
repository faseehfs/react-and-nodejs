const express = require("express");
const router = express.Router();

// router.use() can be used for middleware specific to these routes.

router.get("/login", (req, res) => {
  res.json({
    message: "Login is under development.",
  });
});

module.exports = router;
