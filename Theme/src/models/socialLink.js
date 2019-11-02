const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var socialLinkSchema = new Schema({
  emailaddress: { type: "String", required: true },
  email: { type: "String", required: true },
  newmeal: { type: "String", required: true }
});

var socialLinkModel = mongoose.model(
  "socialLink",
  socialLinkSchema,
  "socialLink"
);
module.exports = socialLinkModel;
