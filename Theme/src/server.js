var express = require("express");
const { mongoose } = "./config/db";

var app = express();

const Router = require("./routes/router");

app.use("/", Router);

app.listen(8080, function() {
  console.log("Server is listening at 8080");
});
