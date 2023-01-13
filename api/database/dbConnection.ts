import {DataSource} from "typeorm";
import {Userauth} from "./../entities/User";
import {Airlines} from "../entities/Airlines";

export const mySqlDb = new DataSource({
	type: "mysql",
	username: "ormuser",
	password: "1234",
	host: "localhost",
	database: "data",
	port: 3307,
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
