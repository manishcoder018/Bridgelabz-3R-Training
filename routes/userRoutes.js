import express from "express";
import createUser from "../controllers/createUser.js";
import loginUser from "../controllers/loginUser.js";
import logoutUser from "../controllers/logoutUser.js";

const router = express.Router();

// Signup page
router.get("/signup", (req, res) => {
  res.render("register");
});

// Signup form submit
router.post("/signup", createUser);

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Login submit
router.post("/login", loginUser);

// Logout
router.get("/logout", logoutUser);

export default router;
