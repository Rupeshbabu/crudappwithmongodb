const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB !",
      });
    }
    req.user = user;
    next();
  });
};

exports.createUser = (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  return user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "user registration failed!!!",
      });
    }
    res.json(user);
  });
};

exports.getUserList = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "display user list failed !!!",
      });
    }
    res.json(users);
  });
};
exports.updateUser = (req, res) => {
  console.log(req.user._id);
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "user update failed !!!",
        });
      }
      res.json(user);
    }
  );
};
exports.deleteUser = () => {};
