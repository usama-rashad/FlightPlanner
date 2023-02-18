import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyparser.json());
app.use(cors());

let name: string = "default";

app.get("/", (req, res) => {
	res.send("Hi this is a test");
});

app.post("/setName", (req, res, next) => {
	name = req.body?.data as string;
	console.log("Recieved :" + name);
	res.status(200).send("Success.");
});

app.get("/getName", (req, res, next) => {
	res.status(200).send({username: name});
});

app.listen(5000, () => {
	console.log("Express server has started...");
});
