import {Request, Response} from "express";
import {mySqlDb} from "./../database/dbConnection";
import {multerMiddleWare, multerStorage} from "./../multer/multer";

const upload = multerMiddleWare.single("airlineIcon");

export const createAirlineController = (req: Request, res: Response) => {
	upload(req, res, () => {
		console.log("Upload running.");
	});
	return res.status(200).send("Create airline request received.");
};
