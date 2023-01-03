import {Request, Response} from "express";
import {mySqlDb} from "./../database/dbConnection";
import {multerMiddleWare, multerStorage} from "./../multer/multer";

const upload = multerMiddleWare.single("airlineIcon");

export const createAirlineController = (req: Request, res: Response) => {
	upload(req, res, (err) => {
		if (err) {
			console.log("Error while recieving the airline icon file. Code : " + err);
			return res
				.status(500)
				.send("Error while recieving the airline icon file. Code : " + err);
		}
		console.log("Upload completed.");
	});
	return res.status(200).send("Create airline request received.");
};
