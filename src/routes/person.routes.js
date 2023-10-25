import { Router } from "express";
import {
  addPerson,
  deletePerson,
  getPerson,
  updatePerson,
} from "../controllers/person.controller.js";

const router = Router();

router.route("/person").get(getPerson).post(addPerson);
router.route("/person/:id").put(updatePerson).delete(deletePerson);

export default router;
