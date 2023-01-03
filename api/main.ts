// Imports
const db = require("./database/dbConnection");
const cors = require("cors");
const bodyparser = require("body-parser");

// DOTENV
require("dotenv").config();

// Express
import Express from "express";
const app = Express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Express routes
import createAirlineRoute from "./routes/createAirlineRoute";
import {env} from "process";

app.use("/api/v1", createAirlineRoute);

app.listen(process.env.API_PORT, () => {
	console.log("Listening on port " + process.env.API_PORT + "...");
});
