import {DataSource} from "typeorm";
import {userauth} from "./../entities/User";

export const mySqlDb = new DataSource({
	type: "mysql",
	username: "ormuser",
	password: "1234",
	host: "localhost",
	database: "data",
	port: 3307,
	entities: [userauth],
	logging: false,
	insecureAuth: false,
});

mySqlDb
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized...");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization.Error code:", err);
	});
