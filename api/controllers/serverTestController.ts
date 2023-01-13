import {Request, Response, NextFunction} from "express";

let serverTestCounter: number = 0;

const serverTestController = (req: Request, res: Response, next: NextFunction) => {
	serverTestCounter++;
	return res.status(200).json({message: "Server is online", counter: serverTestCounter});
};

const serverGetTimeController = (req: Request, res: Response, next: NextFunction) => {
	let currentDate = new Date();
	let hours: string = currentDate.getHours().toString();
	let minutes: string = currentDate.getMinutes().toString();
	let seconds: string = currentDate.getSeconds().toString();
	let currentTime: string = hours + ":" + minutes + ":" + seconds;
	return res.status(200).json({message: "Server is online", serverTime: currentTime});
};

export {serverTestController, serverGetTimeController};
