import express from "express";
import {serverGetTimeController, serverTestController} from "./../controllers/serverTestController";

export const serverTestRoute = express();
export const serverTimeRoute = express();

serverTestRoute.get("", serverTestController);
serverTimeRoute.get("/getTime", serverGetTimeController);
