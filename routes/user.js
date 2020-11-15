const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUserList,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.param("id", getUserById);

router.get("/users", getUserList);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
