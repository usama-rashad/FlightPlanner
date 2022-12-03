import express from "express";

export const searchRouter = express.Router();

searchRouter.get("/search", (req, res) => {
	return res.status(201).json("Get request received.");
});
