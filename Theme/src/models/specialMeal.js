const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var specialMealSchema = new Schema({
  mealpicture: { type: "String", required: true },
  mealName: { type: "String", required: true },
  mealstar: { type: "String", required: true },
  mealprice: { type: "String", required: true }
});

var specialMealModel = mongoose.model(
  "specialMeal",
  specialMealSchema,
  "specialMeal"
);
module.exports = specialMealModel;
