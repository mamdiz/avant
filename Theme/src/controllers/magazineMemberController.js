var magazineMember = require("../models/magazineMember");

// Display list of all MagazineMembers.
exports.magazineMember_list = function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("magazineMember")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific MagazineMember.
exports.magazineMember_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember detail: " + req.params.id);
};

// Display MagazineMember create form on GET.
exports.magazineMember_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember create GET");
};

// Handle MagazineMember create on POST.
exports.magazineMember_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember create POST");
};

// Display MagazineMember delete form on GET.
exports.magazineMember_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember delete GET");
};

// Handle MagazineMember delete on POST.
exports.magazineMember_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember delete POST");
};

// Display MagazineMember update form on GET.
exports.magazineMember_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember update GET");
};

// Handle MagazineMember update on POST.
exports.magazineMember_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: MagazineMember update POST");
};
