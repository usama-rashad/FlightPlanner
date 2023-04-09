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
    return res.status(400).json("Passwords do not match.");
  }

  // Call firebase function to create a new user
  await createNewUser(email, password1)
    .then((result) => {
      userSignupOK = true;
    })
    .catch((error: AuthError) => {
      signupErrorMessage = error.message;
    });

  // Enter the user data into the firestore
  await addUserData({
    username: username,
    email: email,
    city: city,
    country: country,
  })
    .then((response) => {
      userDataAdditionOK = true;
      console.log("New user creation success.");
      return res.status(400).json({ message: "New user created", error: 0 });
    })
    .catch((error: FirestoreError) => {
      createUserEntryErrorMessage = error.message;
      return res.status(400).json({
        message: "New user could not be created.",
        serverError1: signupErrorMessage,
        serverError2: createUserEntryErrorMessage,
        error: 1,
      });
    });
}

export { createNewUserController, monitorRetries };
