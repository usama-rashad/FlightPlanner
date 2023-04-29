import { NextFunction, Request, Response } from "express";
import { mySqlDb } from "./../database/dbConnection";
import { multerMiddleWare, multerStorage } from "./../multer/multer";
import { Airlines } from "./../entities/Airlines";

const upload = multerMiddleWare.single("airlineIcon");

async function createAirlineController(req: Request, res: Response, next: NextFunction) {
  let { airlineName, airlineHub, airlineIcon } = req.body;
  return res.status(200).json({ message: "OK", name: airlineName, hub: airlineHub, iconName: airlineIcon });
}

export { createAirlineController };
