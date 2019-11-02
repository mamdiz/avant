const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var customerViewSchema = new Schema({
  userPicture: { type: "String", required: true },
  userFullName: { type: "String", required: true },
  comment: { type: "String", required: true },
  stars: { type: "String", required: true }
});

var customerViewModel = mongoose.model(
  "customerView",
  customerViewSchema,
  "customerView"
);
module.exports = customerViewModel;
