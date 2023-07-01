import { Router } from "express";
import * as deanCtrl from "../controllers/dean.controller";

const router = Router();

router.route("/").get(deanCtrl.getDeans);

export default router;
