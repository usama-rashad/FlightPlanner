import {Request, Response, NextFunction} from "express";

export const sampleDataEndpointController = (req: Request, res: Response, next: NextFunction) => {
	let acceptFlag: boolean = req.body.acceptFlag;
	let data: string = req.body.data;
	setTimeout(() => {
		if (acceptFlag) {
			console.log(data);
			return res.status(200).json({message: "Data updated with " + data});
		} else {
			return res.status(200).json({message: "Data update failed."});
		}
	}, 2000);
};
