import express from "express";
import {AirlineTableGetData, AirlineTableSetData} from "../Controllers/AirlineTableDataController";

export const AirlineDataSetterRoute = express();
export const AirlineDataGetterRoute = express();
export const testGetRoute = express();

AirlineDataSetterRoute.post("/set/:rowID/:paramID", AirlineTableSetData);
AirlineDataGetterRoute.get("/get/:rowID/:paramID", AirlineTableGetData);
