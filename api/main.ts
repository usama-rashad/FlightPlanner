import {DataSource} from "typeorm";
import {userauth} from "./entities/User";

// Express
import Express from "express";
const App = Express();

// Express routes
import {searchRouter} from "./routes/Search";

App.use("/", searchRouter);

App.listen(3001, () => {
	console.log("Listening on port 3001...");
});

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
