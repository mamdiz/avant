const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var dailyMealSchema = new Schema({
  breakfastmeal: { type: "String", required: true },
  launchmeal: { type: "String", required: true },
  dinner: { type: "String", required: true },
  pictureitem: { type: "String", required: true },
  itemname: { type: "String", required: true },
  staritem: { type: "String", required: true },
  priceitem: { type: "String", required: true }
});

var dailyMealModel = mongoose.model(
  "dailyMeal",
  dailyMealSchema,
  "dailyMeal"
);
module.exports = dailyMealModel;
