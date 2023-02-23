const { Router } = require("express");

const router = Router();

const {
  createUser,
  deleteUser,
  getUser,
  loginUser,
} = require("../controllers/users.controllers");

router.route("/").post(loginUser).post(createUser)

router.route("/:id").delete(deleteUser);

router.route("/login").get(getUser).post(loginUser);

router.route("/register").get(getUser).post(createUser);

module.exports = router;
