const express = require("express");
const mw = require("./../multer/multer");
const createAirlineRoute = express.Router();

import {Request, Response} from "express";
import {multerMiddleWare, multerStorage} from "./../multer/multer";

// Import controller
import {createAirlineController} from "../controllers/createAirlineController";

createAirlineRoute.post(
	"/createAirline",
	multerMiddleWare.single("airlineIcon"),
	createAirlineController
);

export default createAirlineRoute;
