import { NextFunction, Request, Response, response } from "express";
import { AuthError } from "firebase/auth";
import { FirestoreError } from "firebase/firestore";
import { addUserData, createNewUser, fireStoreAuth } from "../database/firebase";

let retryCount = 0;

function monitorRetries(req: Request, res: Response, next: NextFunction) {
  retryCount++;
  setTimeout(() => (retryCount = 0), 3000);
  next();
}

async function createNewUserController(req: Request, res: Response, next: NextFunction) {
  // Extract username and passwords
  let { username, password1, password2, email, city, country } = req.body;
  // Status flags
  let userSignupOK = false;
  let userDataAdditionOK = false;
  // Error messages
  let signupErrorMessage: string = "";
  let createUserEntryErrorMessage: string = "";

  // Compare passwords
  if (password1 !== password2) {
    return res.status(400).json({ message: "Passwords do not match.", error: 1 });
  }

  // Call firebase function to create a new user
  await createNewUser(email, password1)
    .then(async (result) => {
      return await addUserData({ username: username, email: email, city: city, country: country });
    })
    .then(() => {
      console.log("New user creation success.");
      return res.status(400).json({ message: "New user created", error: 0 });
    })
    .catch((error: AuthError) => {
      signupErrorMessage = error.message;
      console.log("signupErrorMessage : " + signupErrorMessage);
      return res.status(400).json({
        message: "New user could not be created.",
        serverError1: signupErrorMessage,
        error: 1,
      });
    });
}

export { createNewUserController, monitorRetries };
