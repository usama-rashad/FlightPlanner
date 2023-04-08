import { createNewUserController, monitorRetries } from "../controllers/createNewUserController";

const express = require("express");
const createNewUserRoute = express.Router();

createNewUserRoute.post("/createNewUser", monitorRetries, createNewUserController);

export { createNewUserRoute };
