const Article = require("../models/Article");

exports.getArticles = async (req, res) => {
  let allArticles = await Article.find();
  res.json(allArticles);
};

exports.addArticles = async (req, res, next) => {
  const articleData = req.body;

  try {
    let articleNew = await Article.create(articleData);
    res.json(articleNew);
  } catch (err) {
    next(err);
  }
};
