import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import {AirlineDataGetterRoute, AirlineDataSetterRoute} from "./Routes/AirlineDataRoutes";
import {testGetRoute} from "./Routes/AirlineDataRoutes";

const apiPrefix: string = "/api/v1";

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(apiPrefix, AirlineDataGetterRoute);
app.use(apiPrefix, AirlineDataSetterRoute);

app.listen(5000, () => {
	console.log("Express server has started...");
});
