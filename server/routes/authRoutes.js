import { register, login, updateUser, getAllUsers } from "../controllers/authController.js";
import express from "express";
const router = express.Router();
import rateLimiter from "express-rate-limit";

import { protect, restrictTo } from "../middlewares/auth.js";

// rate-limiting middleware for Express
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);

router.use(protect);
router.route("/updateUser").patch(updateUser);

router.use(restrictTo('admin'));

router.route("/allUsers").get(getAllUsers);

export default router;
