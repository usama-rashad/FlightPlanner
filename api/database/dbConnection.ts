import dotenv from "dotenv";
dotenv.config();

import {DataSource} from "typeorm";
import {Userauth} from "./../entities/User";
import {Airlines} from "../entities/Airlines";

let username: string;
let password: string;
let port: number;

if ((process.env.ENVIRONMENT = "laptop")) {
	(username = "ormuser"), (password = "1234"), (port = 3307);
} else if ((process.env.ENVIRONMENT = "desktop")) {
	(username = "ormuser"), (password = "1234!@#$"), (port = 3306);
} else {
	console.log("Select environment in .env file.");
	process.exit();
}

export const mySqlDb = new DataSource({
	type: "mysql",
	username: username,
	password: password,
	host: "localhost",
	database: "data",
	port: port, // 3307 for laptop , 3306 for desktop
	entities: [Userauth, Airlines],
	logging: false,
	insecureAuth: false,
	synchronize: true,
});

mySqlDb
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized...");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization.Error code:", err);
	});
