const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var footerDataSchema = new Schema({
  youtube: { type: "String", required: true },
  linkdin: { type: "String", required: true },
  googleplus: { type: "String", required: true },
  twitter: { type: "String", required: true },
  facebook: { type: "String", required: true }
});

var footerDataModel = mongoose.model(
  "footerData",
  footerDataSchema,
  "footerData"
);
module.exports = footerDataModel;
