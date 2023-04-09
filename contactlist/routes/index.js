const express = require('express');

const router = express.Router();

const userController = require("../controller/user");

// api to get the users
router.get("/users", userController.users);

router.post("/add-user", userController.addUser);

// router.get("/delete-user/:id", userController.deleteUser);

router.get("/delete-user", userController.deleteUserQuery);

module.exports = router;