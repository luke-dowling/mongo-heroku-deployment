const express = require("express");
const router = express.Router();

const {
  getArticles,
  addArticles,
} = require("../controllers/articleControllers");

router.route("/").get(getArticles).post(addArticles);

module.exports = router;
