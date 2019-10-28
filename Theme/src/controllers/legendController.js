var legend = require("../models/legend");

// Display list of all Legends.
exports.legend_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("legend")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific Legend.
exports.legend_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend detail: " + req.params.id);
};

// Display Legend create form on GET.
exports.legend_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend create GET");
};
// Handle Legend create on POST.
exports.legend_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend create POST");
};

// Display Legend update form on GET.
exports.legend_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend update GET");
};
// Handle Legend update on POST.
exports.legend_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend update POST");
};

// Display Legend delete form on GET.
exports.legend_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend delete GET");
};
// Handle Legend delete on POST.
exports.legend_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Legend delete POST");
};
