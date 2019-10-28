var specialMeal = require("../models/specialMeal");

// Display list of all SpecialMeals.
exports.specialMeal_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("specialMeal")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific SpecialMeal.
exports.specialMeal_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal detail: " + req.params.id);
};

// Display SpecialMeal create form on GET.
exports.specialMeal_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal create GET");
};

// Handle SpecialMeal create on POST.
exports.specialMeal_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal create POST");
};

// Display SpecialMeal delete form on GET.
exports.specialMeal_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal delete GET");
};

// Handle SpecialMeal delete on POST.
exports.specialMeal_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal delete POST");
};

// Display SpecialMeal update form on GET.
exports.specialMeal_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal update GET");
};

// Handle SpecialMeal update on POST.
exports.specialMeal_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SpecialMeal update POST");
};
