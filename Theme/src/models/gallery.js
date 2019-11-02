const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var gallerySchema = new Schema({
  galleryPicture: { type: "String", required: true }
});

var galleryModel = mongoose.model("gallery", gallerySchema, "gallery");
module.exports = galleryModel;
