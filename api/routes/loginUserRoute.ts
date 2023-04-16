import loginExistingUserController from "../controllers/loginUserController";

const express = require("express");
const loginUserRoute = express.Router();

loginUserRoute.post("/loginUser", loginExistingUserController);

export { loginUserRoute };
