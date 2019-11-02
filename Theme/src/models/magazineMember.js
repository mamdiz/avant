const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var magazineMemberSchema = new Schema({
  memberPicture: { type: "String", required: true },
  memberFullName: { type: "String", required: true },
  commentofmember: { type: "String", required: true }
});

var magazineMemberModel = mongoose.model(
  "magazineMember",
  magazineMemberSchema,
  "magazineMember"
);
module.exports = magazineMemberModel;
