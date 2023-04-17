import { logoutUserController } from "../controllers/logoutUserController";

const express = require("express");
const logoutUserRoute = express.Router();

logoutUserRoute.post("/logoutUser", logoutUserController);

export { logoutUserRoute };
