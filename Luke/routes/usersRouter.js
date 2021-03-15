const express = require("express");
const router = express.Router();

const { getUsers, addUsers } = require("../controllers/userControllers");

router.route("/").get(getUsers).post(addUsers);

module.exports = router;
