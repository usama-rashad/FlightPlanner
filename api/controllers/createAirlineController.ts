import {NextFunction, Request, Response} from "express";
import {mySqlDb} from "./../database/dbConnection";
import {multerMiddleWare, multerStorage} from "./../multer/multer";
import {Airlines} from "./../entities/Airlines";

const upload = multerMiddleWare.single("airlineIcon");

// Recieve the textual form data from the client
export const createAirlineDataController = async (req: Request, res: Response, next: NextFunction) => {
	const {airlineName, airlineHub, airlineIcon} = req.body;
	if (typeof airlineName === undefined || airlineName === null) {
		return res.status(200).json({message: "Airline name is invalid."});
	}
	if (typeof airlineHub === undefined || airlineHub === null) {
		return res.status(200).json({message: "Airline hub name is invalid."});
	}
	if (typeof airlineIcon === undefined || airlineIcon === null) {
		return res.status(200).json({message: "Airline icon name is invalid."});
	}
	// Look for an existing airline in the database
	let airlineTable = mySqlDb.getRepository(Airlines);
	let existingAirline = (await airlineTable.findOneBy({airlineName: airlineName})) as Airlines;
	if (existingAirline === null) {
		// Add the airline to the table
		let newAirline = new Airlines();
		newAirline.airlineName = airlineName;
		newAirline.airlineHub = airlineHub;
		newAirline.airlineIcon = airlineIcon;

		airlineTable
			.save(newAirline)
			.then((response) => {
				return res.status(200).json({message: "Airline was added to the system", airlineName: newAirline.airlineName});
			})
			.catch((err) => {
				return res.status(200).json({message: "Airline was not added to the system. DB error : " + err, airlineName: newAirline.airlineName});
			});
	} else {
		return res.status(200).json({message: "Airline already exists"});
	}
};

// Recieve the icon data from the client
export const createAirlineFileController = async (req: Request, res: Response, next: NextFunction) => {
	let iconFileName: string = "";
	var body: string = "";
	upload(req, res, (err) => {
		if (err) {
			return res.status(200).json({message: "Multer error. Code : " + err});
		}
		// Get the file name from the upload
		iconFileName = req.file?.filename as string;
		body = req.body;
		// Get the airline name from the form data
		let name = req.body.airlineName;
		// Update the file name in the table.
		let airlineTable = mySqlDb.getRepository(Airlines);

		airlineTable
			.findBy({airlineName: name})
			.then((data) => {
				if (data.length > 1) return res.status(200).json({message: "More than one airline with that name found", airlineName: name});
				else if ((data.length = 1)) {
					// Update the icon name of the airline
					data[0].airlineIcon = iconFileName;
					// Update the table
					airlineTable
						.save(data)
						.then((response) => {
							return res.status(200).json({message: "Airline icon updated successfully"});
						})
						.catch((error) => {
							return res.status(200).json({message: "Error while updating the icon"});
						});
				}
			})
			.catch((error) => {
				return res.status(200).json({message: "Internal error while updaing icon file"});
			});
	});
};
