var express = require("express");
const { mongoose } = "./config/db";

var app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

const Router = require("./routes/router");

app.use("/", Router);

app.listen(5000, function() {
  console.log("Server is listening at 8080");
});
