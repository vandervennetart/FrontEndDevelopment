import express from "express";
import { catValidator } from "../middelware/catValidator.js";
import { createCat, getAllCats, getCat } from "../controllers/cats.js";

const katjesRouter = express.Router();

katjesRouter
    .route("/cats")
    .get(getAllCats)
    .post(catValidator, createCat);

katjesRouter.route("/cats?sort=:sort").get(getAllCatsSorted);



katjesRouter.route("/cats/:id").get(getCat);



export default katjesRouter;


//const id = +req.params.id;