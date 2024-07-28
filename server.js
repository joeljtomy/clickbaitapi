const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

app.get("/", (req, res) => {
  res.status(200).send({
    connected: true,
  });
});

module.exports = app;