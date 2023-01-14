import express from "express";
import {viewAirlinesController} from "../controllers/viewAirlinesController";

export const viewAirlinesRoute = express.Router();

viewAirlinesRoute.get("/viewAirlines", viewAirlinesController);
