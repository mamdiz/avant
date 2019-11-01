const mongoose = require("mongoose");
const config = require("./config");
const {
  db: { host, port, name }
} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log("MongoDB Connection Succeeded");
    else
      console.log("Error in DB Connection: ".JSON.stringify(err, undefined, 2));
  }
);
module.exports = mongoose;
