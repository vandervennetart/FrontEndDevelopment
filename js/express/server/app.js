import express from "express";
import morgan from "morgan";
import katjesRouter from "./routers/katjes.js";
import cors from "cors"

//make a new app
const app = express();

//middelware
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

// 2. Routers
app.use("/", katjesRouter);

export { app };


