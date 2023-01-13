const express = require("express");
const mw = require("./../multer/multer");
const createAirlineDataRoute = express.Router();
const createAirlineFileRoute = express.Router();

import {Request, Response} from "express";

// Import controller
import {createAirlineDataController, createAirlineFileController} from "../controllers/createAirlineController";

createAirlineDataRoute.post("/createAirline/data", createAirlineDataController);
createAirlineFileRoute.post("/createAirline/file", createAirlineFileController);

export {createAirlineDataRoute, createAirlineFileRoute};
