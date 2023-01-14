import {NextFunction, Request, Response} from "express";
import {mySqlDb} from "../database/dbConnection";
import {Airlines} from "../entities/Airlines";

export const viewAirlinesController = async (req: Request, res: Response, next: NextFunction) => {
	let airlineTable = await mySqlDb.getRepository(Airlines);
	await airlineTable
		.find()
		.then((data) => {
			let airlines: Airlines[] = data;
			return res.status(200).json(airlines);
		})
		.catch((err) => {
			return res.status(200).json({message: "Error while reading list of airlines"});
		});
};
