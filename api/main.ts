import {DataSource} from "typeorm";
import {userauth} from "./Entities/User";

export const mySqlDb = new DataSource({
	type: "mysql",
	username: "ormuser",
	password: "1234",
	host: "localhost",
	database: "data",
	port: 3307,
	entities: [userauth],
	logging: true,
	insecureAuth: false,
});

mySqlDb
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
		mySqlDb
			.getRepository("userauth")
			.find()
			.then((data) => {
				console.log("Found data : ");
				data.forEach((element) => {
					console.log(element);
				});
			})
			.catch((err) => {
				console.log("Error : " + err);
			});
	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
	});
