const express = require("express");
const createAirlineRoute = express.Router();

import {Request, Response} from "express";

// Import controller
import {createAirlineController} from "../controllers/createAirlineController";

createAirlineRoute.post("/createAirline", createAirlineController);

export default createAirlineRoute;
