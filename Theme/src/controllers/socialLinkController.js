var socialLink = require("../models/socialLink");

// Display list of all SocialLinks.
exports.socialLink_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("socialLink")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific SocialLink.
exports.socialLink_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink detail: " + req.params.id);
};

// Display SocialLink create form on GET.
exports.socialLink_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink create GET");
};

// Handle SocialLink create on POST.
exports.socialLink_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink create POST");
};

// Display SocialLink delete form on GET.
exports.socialLink_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink delete GET");
};

// Handle SocialLink delete on POST.
exports.socialLink_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink delete POST");
};

// Display SocialLink update form on GET.
exports.socialLink_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink update GET");
};

// Handle SocialLink update on POST.
exports.socialLink_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: SocialLink update POST");
};
