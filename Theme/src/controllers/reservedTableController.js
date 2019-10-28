var reservedTable = require("../models/reservedTable");

// Display list of all ReservedTables.
exports.reservedTable_list = function(req, res) {
  var mongoose = require('mongoose');
  var url = "mongodb://localhost:8080/";
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("reservedTable")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific ReservedTable.
exports.reservedTable_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable detail: " + req.params.id);
};

// Display ReservedTable create form on GET.
exports.reservedTable_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable create GET");
};

// Handle ReservedTable create on POST.
exports.reservedTable_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable create POST");
};

// Display ReservedTable delete form on GET.
exports.reservedTable_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable delete GET");
};

// Handle ReservedTable delete on POST.
exports.reservedTable_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable delete POST");
};

// Display ReservedTable update form on GET.
exports.reservedTable_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable update GET");
};

// Handle ReservedTable update on POST.
exports.reservedTable_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: ReservedTable update POST");
};
