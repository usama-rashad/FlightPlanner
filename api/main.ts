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

app.use("/api/v1", createAirlineRoute);

app.listen(3001, () => {
	console.log("Listening on port 3001...");
});
