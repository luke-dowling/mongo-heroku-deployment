const User = require("../models/User");

exports.getUsers = async (req, res) => {
  let allUsers = await User.find();
  res.json(allUsers);
};

exports.addUsers = async (req, res, next) => {
  const userData = req.body;

  try {
    let userNew = await User.create(userData);
    res.json(userNew);
  } catch (err) {
    next(err);
  }
};
