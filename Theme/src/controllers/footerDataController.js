var footerData = require("../models/footerData");

// Display list of all FooterDatas.
exports.footerData_list = function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("footerData")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific FooterData.
exports.footerData_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData detail: " + req.params.id);
};

// Display FooterData create form on GET.
exports.footerData_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData create GET");
};

// Handle FooterData create on POST.
exports.footerData_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData create POST");
};

// Display FooterData delete form on GET.
exports.footerData_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData delete GET");
};

// Handle FooterData delete on POST.
exports.footerData_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData delete POST");
};

// Display FooterData update form on GET.
exports.footerData_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData update GET");
};

// Handle FooterData update on POST.
exports.footerData_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: FooterData update POST");
};
