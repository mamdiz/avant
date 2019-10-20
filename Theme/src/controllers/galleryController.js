var gallery = require("../models/gallery");

// Display list of all Gallery.
exports.gallery_list = function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("gallery")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific Gallery.
exports.gallery_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery detail: " + req.params.id);
};

// Display Gallery create form on GET.
exports.gallery_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery create GET");
};

// Handle Gallery create on POST.
exports.gallery_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery create POST");
};

// Display Gallery delete form on GET.
exports.gallery_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery delete GET");
};

// Handle Gallery delete on POST.
exports.gallery_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery delete POST");
};

// Display Gallery update form on GET.
exports.gallery_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery update GET");
};

// Handle Gallery update on POST.
exports.gallery_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Gallery update POST");
};
