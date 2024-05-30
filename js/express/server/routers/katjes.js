import express from "express";
import { createKatje, getAllKatjes, getKat } from "../controllers/katjes.js";
import {katjesValidator} from "../middelware/katjesValidation.js";

const katjesRouter = express.Router();

katjesRouter.route("/api/v1/cats")
    .get(getAllKatjes)
    .post(katjesValidator, createKatje);

katjesRouter.route("/api/v1/cats/:id")
    .get(getKat);

export default katjesRouter;
