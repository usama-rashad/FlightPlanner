import { NextFunction, Request, Response } from "express";

function createNewUserController(req: Request, res: Response, next: NextFunction) {
  // Extract username and passwords
  let { username, password1, password2, email, city, country } = req.body;
  console.log(req.body);
  setTimeout(() => {
    console.log("Responding with OK...");
    return res.status(200).json({ result: "New user has been registered successfully." });
  }, 2000);
}

export { createNewUserController };
