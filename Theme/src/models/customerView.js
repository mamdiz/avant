const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var customerViewSchema = new Schema({
  title: { type: "String", required: true },
  author: { type: "String", required: true },
  body: { type: "String", required: true }
});

var customerViewModel = mongoose.model(
  "customerView",
  customerViewSchema,
  "customerView"
);
module.exports = customerViewModel;
