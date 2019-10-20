const mongoose = require("mongoose");
var customerViews = require("../models/customerView");

// Display list of all CustomerViews.
exports.customerView_list = function(req, res) {
  var customerViews = mongoose.model("customerView");

  customerViews.find({}, function(err, data) {
    console.log(">>>> " + data);
  });
};

// Display detail page for a specific CustomerView.
exports.customerView_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView detail: " + req.params.id);
};

// Display CustomerView create form on GET.
exports.customerView_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView create GET");
};

// Handle CustomerView create on POST.
exports.customerView_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView create POST");
};

// Display CustomerView delete form on GET.
exports.customerView_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView delete GET");
};

// Handle CustomerView delete on POST.
exports.customerView_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView delete POST");
};

// Display CustomerView update form on GET.
exports.customerView_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView update GET");
};

// Handle CustomerView update on POST.
exports.customerView_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: CustomerView update POST");
};