const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var videoRecipeSchema = new Schema({
  video: { type: "String", required: true }
});

var videoRecipeModel = mongoose.model(
  "videoRecipe",
  videoRecipeSchema,
  "videoRecipe"
);
module.exports = videoRecipeModel;
