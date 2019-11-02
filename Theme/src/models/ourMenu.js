const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ourMenuSchema = new Schema({
  itempicture: { type: "String", required: true },
  itemname: { type: "String", required: true },
  itemcomment: { type: "String", required: true },
  itemprice: { type: "String", required: true }
});

var ourMenuModel = mongoose.model(
  "ourMenu",
  ourMenuSchema,
  "ourMenu"
);
module.exports = ourMenuModel;
