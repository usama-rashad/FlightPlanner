import {Request, Response} from "express";

export const createAirlineController = (req: Request, res: Response) => {
	return res.status(200).send("Create airline request received.");
};
