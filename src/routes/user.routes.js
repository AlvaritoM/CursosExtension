import { Router } from "express";
import {
  login,
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").post(login);
router.route("/user").get(getUser).post(addUser);
router.route("/user/:id").put(updateUser).delete(deleteUser);

export default router;
