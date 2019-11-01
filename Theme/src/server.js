var express = require("express");
const { mongoose } = "./config/db";

var app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const Router = require("./routes/router");

app.use("/", Router);

app.listen(8080, function() {
  console.log("Server is listening at 8080");
});
