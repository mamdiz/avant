const express = require("express");
const { mongoose } = "../config/db";
const router = express.Router();

// Require controller modules.
var legend_controller = require("../controllers/legendController");
var customerView_controller = require("../controllers/customerViewController");
var dailyMeal_controller = require("../controllers/dailyMealController");
var footerData_controller = require("../controllers/footerDataController");
var gallery_controller = require("../controllers/galleryController");
var magazineMember_controller = require("../controllers/magazineMemberController");
var ourMenu_controller = require("../controllers/ourMenuController");
var ourTeam_controller = require("../controllers/ourTeamController");
var reservedTable_controller = require("../controllers/reservedTableController");
var socialLink_controller = require("../controllers/socialLinkController");
var specialMeal_controller = require("../controllers/specialMeal");
var videosRecipe_controller = require("../controllers/videosRecipeController");

router.get("/", function(req, res) {
  res.send("Index");
});

router.get("/about", function(req, res) {
  res.send("About me");
});

router.post("/about", function(req, res) {
  res.send("You Called This With Post Method");
});

//#region Legend

/// LEGEND ROUTES ///

// GET request for creating Legend. NOTE This must come before route for id (i.e. display legend).
router.get("/legend/create", legend_controller.legend_create_get);

// POST request for creating Legend.
router.post("/legend/create", legend_controller.legend_create_post);

// GET request to delete Legend.
router.get("/legend/:id/delete", legend_controller.legend_delete_get);

// POST request to delete Legend.
router.post("/legend/:id/delete", legend_controller.legend_delete_post);

// GET request to update Legend.
router.get("/legend/:id/update", legend_controller.legend_update_get);

// POST request to update Legend.
router.post("/legend/:id/update", legend_controller.legend_update_post);

// GET request for one Legend.
router.get("/legend/:id", legend_controller.legend_detail);

// GET request for list of all Legends.
router.get("/legends", legend_controller.legend_list);
//#endregion

//#region Customer Views

// POST request for creating customerView.
router.post(
  "/customerView/create",
  customerView_controller.customerView_create_post
);

// POST request to delete customerView.
router.post(
  "/customerView/delete",
  customerView_controller.customerView_delete_post
);

// POST request to update customerView.
router.post(
  "/customerView/update",
  customerView_controller.customerView_update_post
);

// GET request for one customerView.
router.get("/customerView/detail", customerView_controller.customerView_detail);

// GET request for list of all customerViews.
router.get("/customerViews", customerView_controller.customerView_list);
//#endregion

//#region dailyMeal

/// Daily Meals ROUTES ///

// GET request for creating dailyMeal. NOTE This must come before route for id (i.e. display dailyMeal).
router.get("/dailyMeal/create", dailyMeal_controller.dailyMeal_create_get);

// POST request for creating dailyMeal.
router.post("/dailyMeal/create", dailyMeal_controller.dailyMeal_create_post);

// GET request to delete dailyMeal.
router.get("/dailyMeal/:id/delete", dailyMeal_controller.dailyMeal_delete_get);

// POST request to delete dailyMeal.
router.post(
  "/dailyMeal/:id/delete",
  dailyMeal_controller.dailyMeal_delete_post
);

// GET request to update dailyMeal.
router.get("/dailyMeal/:id/update", dailyMeal_controller.dailyMeal_update_get);

// POST request to update dailyMeal.
router.post(
  "/dailyMeal/:id/update",
  dailyMeal_controller.dailyMeal_update_post
);

// GET request for one dailyMeal.
router.get("/dailyMeal/:id", dailyMeal_controller.dailyMeal_detail);

// GET request for list of all dailyMeals.
router.get("/dailyMeals", dailyMeal_controller.dailyMeal_list);
// //#endregion

// //#region foorData

// GET request for creating footerData. NOTE This must come before route for id (i.e. display footerData).
router.get("/footerData/create", footerData_controller.footerData_create_get);

// POST request for creating footerData.
router.post("/footerData/create", footerData_controller.footerData_create_post);

// GET request to delete footerData.
router.get(
  "/footerData/:id/delete",
  footerData_controller.footerData_delete_get
);

// POST request to delete footerData.
router.post(
  "/footerData/:id/delete",
  footerData_controller.footerData_delete_post
);

// GET request to update footerData.
router.get(
  "/footerData/:id/update",
  footerData_controller.footerData_update_get
);

// POST request to update footerData.
router.post(
  "/footerData/:id/update",
  footerData_controller.footerData_update_post
);

// GET request for one footerData.
router.get("/footerData/:id", footerData_controller.footerData_detail);

// GET request for list of all footerDatas.
router.get("/footerDatas", footerData_controller.footerData_list);
// //#endregion

// //#region gallery

//

// GET request for creating gallery. NOTE This must come before route for id (i.e. display gallery).
router.get("/gallery/create", gallery_controller.gallery_create_get);

// POST request for creating gallery.
router.post("/gallery/create", gallery_controller.gallery_create_post);

// GET request to delete gallery.
router.get("/gallery/:id/delete", gallery_controller.gallery_delete_get);

// POST request to delete gallery.
router.post("/gallery/:id/delete", gallery_controller.gallery_delete_post);

// GET request to update gallery.
router.get("/gallery/:id/update", gallery_controller.gallery_update_get);

// POST request to update gallery.
router.post("/gallery/:id/update", gallery_controller.gallery_update_post);

// GET request for one gallery.
router.get("/gallery/:id", gallery_controller.gallery_detail);

// GET request for list of all gallerys.
router.get("/gallerys", gallery_controller.gallery_list);
//#endregion

//#region magazine Member

// GET request for creating magazineMember. NOTE This must come before route for id (i.e. display magazineMember).
router.get(
  "/magazineMember/create",
  magazineMember_controller.magazineMember_create_get
);

// POST request for creating magazineMember.
router.post(
  "/magazineMember/create",
  magazineMember_controller.magazineMember_create_post
);

// GET request to delete magazineMember.
router.get(
  "/magazineMember/:id/delete",
  magazineMember_controller.magazineMember_delete_get
);

// POST request to delete magazineMember.
router.post(
  "/magazineMember/:id/delete",
  magazineMember_controller.magazineMember_delete_post
);

// GET request to update magazineMember.
router.get(
  "/magazineMember/:id/update",
  magazineMember_controller.magazineMember_update_get
);

// POST request to update magazineMember.
router.post(
  "/magazineMember/:id/update",
  magazineMember_controller.magazineMember_update_post
);

// GET request for one magazineMember.
router.get(
  "/magazineMember/:id",
  magazineMember_controller.magazineMember_detail
);

// GET request for list of all magazineMembers.
router.get("/magazineMembers", magazineMember_controller.magazineMember_list);
//#endregion

//#region our Menu

// GET request for creating ourMenu. NOTE This must come before route for id (i.e. display ourMenu).
router.get("/ourMenu/create", ourMenu_controller.ourMenu_create_get);

// POST request for creating ourMenu.
router.post("/ourMenu/create", ourMenu_controller.ourMenu_create_post);

// GET request to delete ourMenu.
router.get("/ourMenu/:id/delete", ourMenu_controller.ourMenu_delete_get);

// POST request to delete ourMenu.
router.post("/ourMenu/:id/delete", ourMenu_controller.ourMenu_delete_post);

// GET request to update ourMenu.
router.get("/ourMenu/:id/update", ourMenu_controller.ourMenu_update_get);

// POST request to update ourMenu.
router.post("/ourMenu/:id/update", ourMenu_controller.ourMenu_update_post);

// GET request for one ourMenu.
router.get("/ourMenu/:id", ourMenu_controller.ourMenu_detail);

// GET request for list of all ourMenus.
router.get("/ourMenus", ourMenu_controller.ourMenu_list);
//#endregion

//#region our Team

// GET request for creating ourTeam. NOTE This must come before route for id (i.e. display ourTeam).
router.get("/ourTeam/create", ourTeam_controller.ourTeam_create_get);

// POST request for creating ourTeam.
router.post("/ourTeam/create", ourTeam_controller.ourTeam_create_post);

// GET request to delete ourTeam.
router.get("/ourTeam/:id/delete", ourTeam_controller.ourTeam_delete_get);

// POST request to delete ourTeam.
router.post("/ourTeam/:id/delete", ourTeam_controller.ourTeam_delete_post);

// GET request to update ourTeam.
router.get("/ourTeam/:id/update", ourTeam_controller.ourTeam_update_get);

// POST request to update ourTeam.
router.post("/ourTeam/:id/update", ourTeam_controller.ourTeam_update_post);

// GET request for one ourTeam.
router.get("/ourTeam/:id", ourTeam_controller.ourTeam_detail);

// GET request for list of all ourTeams.
router.get("/ourTeams", ourTeam_controller.ourTeam_list);
//#endregion

//#region reserved Table

// GET request for creating reservedTable. NOTE This must come before route for id (i.e. display reservedTable).
router.get(
  "/reservedTable/create",
  reservedTable_controller.reservedTable_create_get
);

// POST request for creating reservedTable.
router.post(
  "/reservedTable/create",
  reservedTable_controller.reservedTable_create_post
);

// GET request to delete reservedTable.
router.get(
  "/reservedTable/:id/delete",
  reservedTable_controller.reservedTable_delete_get
);

// POST request to delete reservedTable.
router.post(
  "/reservedTable/:id/delete",
  reservedTable_controller.reservedTable_delete_post
);

// GET request to update reservedTable.
router.get(
  "/reservedTable/:id/update",
  reservedTable_controller.reservedTable_update_get
);

// POST request to update reservedTable.
router.post(
  "/reservedTable/:id/update",
  reservedTable_controller.reservedTable_update_post
);

// GET request for one reservedTable.
router.get("/reservedTable/:id", reservedTable_controller.reservedTable_detail);

// GET request for list of all reservedTables.
router.get("/reservedTables", reservedTable_controller.reservedTable_list);
//#endregion

//#region social Link

// GET request for creating socialLink. NOTE This must come before route for id (i.e. display socialLink).
router.get("/socialLink/create", socialLink_controller.socialLink_create_get);

// POST request for creating socialLink.
router.post("/socialLink/create", socialLink_controller.socialLink_create_post);

// GET request to delete socialLink.
router.get(
  "/socialLink/:id/delete",
  socialLink_controller.socialLink_delete_get
);

// POST request to delete socialLink.
router.post(
  "/socialLink/:id/delete",
  socialLink_controller.socialLink_delete_post
);

// GET request to update socialLink.
router.get(
  "/socialLink/:id/update",
  socialLink_controller.socialLink_update_get
);

// POST request to update socialLink.
router.post(
  "/socialLink/:id/update",
  socialLink_controller.socialLink_update_post
);

// GET request for one socialLink.
router.get("/socialLink/:id", socialLink_controller.socialLink_detail);

// GET request for list of all socialLinks.
router.get("/socialLinks", socialLink_controller.socialLink_list);
//#endregion

//#region special Meal

// GET request for creating specialMeal. NOTE This must come before route for id (i.e. display specialMeal).
router.get(
  "/specialMeal/create",
  specialMeal_controller.specialMeal_create_get
);

// POST request for creating specialMeal.
router.post(
  "/specialMeal/create",
  specialMeal_controller.specialMeal_create_post
);

// GET request to delete specialMeal.
router.get(
  "/specialMeal/:id/delete",
  specialMeal_controller.specialMeal_delete_get
);

// POST request to delete specialMeal.
router.post(
  "/specialMeal/:id/delete",
  specialMeal_controller.specialMeal_delete_post
);

// GET request to update specialMeal.
router.get(
  "/specialMeal/:id/update",
  specialMeal_controller.specialMeal_update_get
);

// POST request to update specialMeal.
router.post(
  "/specialMeal/:id/update",
  specialMeal_controller.specialMeal_update_post
);

// GET request for one specialMeal.
router.get("/specialMeal/:id", specialMeal_controller.specialMeal_detail);

// GET request for list of all specialMeals.
router.get("/specialMeals", specialMeal_controller.specialMeal_list);
//#endregion

//#region videos Recipe

// GET request for creating videosRecipe. NOTE This must come before route for id (i.e. display videosRecipe).
router.get(
  "/videosRecipe/create",
  videosRecipe_controller.videosRecipe_create_get
);

// POST request for creating videosRecipe.
router.post(
  "/videosRecipe/create",
  videosRecipe_controller.videosRecipe_create_post
);

// GET request to delete videosRecipe.
router.get(
  "/videosRecipe/:id/delete",
  videosRecipe_controller.videosRecipe_delete_get
);

// POST request to delete videosRecipe.
router.post(
  "/videosRecipe/:id/delete",
  videosRecipe_controller.videosRecipe_delete_post
);

// GET request to update videosRecipe.
router.get(
  "/videosRecipe/:id/update",
  videosRecipe_controller.videosRecipe_update_get
);

// POST request to update videosRecipe.
router.post(
  "/videosRecipe/:id/update",
  videosRecipe_controller.videosRecipe_update_post
);

// GET request for one videosRecipe.
router.get("/videosRecipe/:id", videosRecipe_controller.videosRecipe_detail);

// GET request for list of all videosRecipes.
router.get("/videosRecipes", videosRecipe_controller.videosRecipe_list);
//#endregion

module.exports = router;
