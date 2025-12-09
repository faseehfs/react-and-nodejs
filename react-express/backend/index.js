const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hello User!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
