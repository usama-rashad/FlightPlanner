import {DataSource} from "typeorm";
import {userauth} from "./Entities/User";

const mySqlDb = new DataSource({
	type: "mysql",
	username: "root",
	password: "1234",
	host: "localhost",
	database: "data",
	port: 3307,
	entities: [userauth],
	logging: true,
	insecureAuth: true,
});

mySqlDb
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
		const info = mySqlDb.getRepository("data").find();

		console.log(info);
	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
	});
