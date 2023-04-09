const express = require("express");
const router = express.Router();

// import the controller
const homeController = require('../controller/home');

// home api
router.get("/", homeController.home);

// add api
router.get("/add", homeController.add);

module.exports = router;