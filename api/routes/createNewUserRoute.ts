import { createNewUserController } from "../controllers/createNewUserController";

const express = require("express");
const createNewUserRoute = express.Router();

createNewUserRoute.post("/createNewUser", createNewUserController);

export { createNewUserRoute };
