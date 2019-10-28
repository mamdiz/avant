var ourMenu = require("../models/ourMenu");

// Display list of all OurMenus.
exports.ourMenu_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("ourMenu")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific OurMenu.
exports.ourMenu_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu detail: " + req.params.id);
};

// Display OurMenu create form on GET.
exports.ourMenu_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu create GET");
};

// Handle OurMenu create on POST.
exports.ourMenu_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu create POST");
};

// Display OurMenu delete form on GET.
exports.ourMenu_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu delete GET");
};

// Handle OurMenu delete on POST.
exports.ourMenu_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu delete POST");
};

// Display OurMenu update form on GET.
exports.ourMenu_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu update GET");
};

// Handle OurMenu update on POST.
exports.ourMenu_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurMenu update POST");
};
