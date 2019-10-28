var ourTeam = require("../models/ourTeam");

// Display list of all OurTeams.
exports.ourTeam_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("ourTeam")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific OurTeam.
exports.ourTeam_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam detail: " + req.params.id);
};

// Display OurTeam create form on GET.
exports.ourTeam_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam create GET");
};

// Handle OurTeam create on POST.
exports.ourTeam_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam create POST");
};

// Display OurTeam delete form on GET.
exports.ourTeam_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam delete GET");
};

// Handle OurTeam delete on POST.
exports.ourTeam_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam delete POST");
};

// Display OurTeam update form on GET.
exports.ourTeam_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam update GET");
};

// Handle OurTeam update on POST.
exports.ourTeam_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: OurTeam update POST");
};
