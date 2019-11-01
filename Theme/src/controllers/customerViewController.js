require("../config/db");
var customerViewModel = require("../models/customerView");

// Display list of all CustomerViews.
exports.customerView_list = function(req, res) {
  customerViewModel.find({}, function(err, docs) {
    if (err) {
      return console.log(err);
    }
    res.type("json").send(docs);
  });
};

// Display detail page for a specific CustomerView.
exports.customerView_detail = function(req, res) {
  customerViewModel.find({ title: req.body.title }, function(err, docs) {
    if (err) {
      return console.log(err);
    }
    res.type("json").send(docs);
  });
};

// Handle CustomerView create on POST.
exports.customerView_create_post = function(req, res) {
  customerViewModel.create(req.body);
  res.send("");
};

// Handle CustomerView delete on POST.
exports.customerView_delete_post = function(req, res) {
  customerViewModel.deleteOne({ title: req.body.title }, function(
    err,
    success
  ) {
    if (err) {
      console.log(err);
    }
    res.send();
  });
};

// Handle CustomerView update on POST.
exports.customerView_update_post = function(req, res) {
  customerViewModel.updateOne(
    { title: req.body.title },
    req.body.newObject,
    function(err, success) {
      if (err) {
        console.log(err);
      }
      res.send();
    }
  );
};
