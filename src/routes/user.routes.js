import { Router } from "express";
import {
  addUsers,
  deleteUser,
  getUsers,
  updateUsers,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/user").get(getUsers).post(addUsers);
router.route("/user/:id").put(updateUsers).delete(deleteUser);

export default router;
