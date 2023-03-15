import {Request, Response, NextFunction} from "express";

let name: string = "";
let firstname: string = "";
let lastname: string = "";
let age: string = "";

export const AirlineTableGetData = (req: Request, res: Response, next: NextFunction) => {
	let response: string = "";
	console.log(JSON.stringify(req.params));
	if (req?.params.paramID == "username") {
		response = name;
		return res.status(200).send({value: response});
	} else if (req?.params.paramID == "firstname") {
		response = firstname;
		return res.status(200).send({value: response});
	} else if (req?.params.paramID == "lastname") {
		response = lastname;
		return res.status(200).send({value: response});
	} else if (req?.params.paramID == "userage") {
		response = age;
		return res.status(200).send({value: response});
	}
};

export const AirlineTableSetData = (req: Request, res: Response, next: NextFunction) => {
	console.log(JSON.stringify(req.params));

	if (req?.params.paramID == "username") {
		name = req?.body.username;
		return res.status(200).send({value: name});
	} else if (req?.params.paramID == "firstname") {
		firstname = req?.body.firstname;
		return res.status(200).send({value: firstname});
	} else if (req?.params.paramID == "lastname") {
		lastname = req?.body.lastname;
		return res.status(200).send({value: lastname});
	} else if (req?.params.paramID == "userage") {
		age = req?.body.userage;
		return res.status(200).send({value: age});
	}
};
