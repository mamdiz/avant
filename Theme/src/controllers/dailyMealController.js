var dailyMeal = require("../models/dailyMeal");

// Display list of all DailyMeals.
exports.dailyMeal_list = function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("dailyMeal")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific DailyMeal.
exports.dailyMeal_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal detail: " + req.params.id);
};

// Display DailyMeal create form on GET.
exports.dailyMeal_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal create GET");
};

// Handle DailyMeal create on POST.
exports.dailyMeal_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal create POST");
};

// Display DailyMeal delete form on GET.
exports.dailyMeal_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal delete GET");
};

// Handle DailyMeal delete on POST.
exports.dailyMeal_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal delete POST");
};

// Display DailyMeal update form on GET.
exports.dailyMeal_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal update GET");
};

// Handle DailyMeal update on POST.
exports.dailyMeal_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: DailyMeal update POST");
};
