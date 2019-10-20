var videosRecipe = require("../models/videosRecipe");

// Display list of all VideosRecipes.
exports.videosRecipe_list = function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Avant");
    dbo
      .collection("videosRecipe")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
};

// Display detail page for a specific VideosRecipe.
exports.videosRecipe_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe detail: " + req.params.id);
};

// Display VideosRecipe create form on GET.
exports.videosRecipe_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe create GET");
};

// Handle VideosRecipe create on POST.
exports.videosRecipe_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe create POST");
};

// Display VideosRecipe delete form on GET.
exports.videosRecipe_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe delete GET");
};

// Handle VideosRecipe delete on POST.
exports.videosRecipe_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe delete POST");
};

// Display VideosRecipe update form on GET.
exports.videosRecipe_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe update GET");
};

// Handle VideosRecipe update on POST.
exports.videosRecipe_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: VideosRecipe update POST");
};
