import express from "express";
const router = express.Router();
import { login, signup, logout } from "../controllers/authController.js";
router.get("/", (req, res) => {
  console.log("AUTH ROUTER");
  res.send("API AUTH ROUTER");
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
