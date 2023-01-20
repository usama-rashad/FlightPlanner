import express from "express";
import {sampleDataEndpointController} from "../controllers/sampleDataEndpointController";

export const sampleDataEndpointRoute = express.Router();

sampleDataEndpointRoute.post("/editName", sampleDataEndpointController);
