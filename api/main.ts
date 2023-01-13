// Imports
const db = require("./database/dbConnection");
const cors = require("cors");
const bodyparser = require("body-parser");
const errorLogging = require("./logging/errorLogging");

// DOTENV
require("dotenv").config();

// Express
import Express from "express";
const app = Express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

// Express routes
import {createAirlineDataRoute, createAirlineFileRoute} from "./routes/createAirlineRoute";
import {serverTestRoute, serverTimeRoute} from "./routes/serverTestRoute";

app.use("/", serverTestRoute);
app.use("/", serverTimeRoute);
app.use("/api/v1", createAirlineDataRoute);
app.use("/api/v1", createAirlineFileRoute);

app.listen(process.env.API_PORT, () => {
	console.log("Listening on port " + process.env.API_PORT + "...");
});
