import { NextFunction, Request, Response, response } from "express";
import { AuthError } from "firebase/auth";
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

  // Compare passwords
  if (password1 !== password2) {
    return res.status(400).json("Passwords do not match.");
  }

  // Call firebase function to create a new user
  await createNewUser(email, password1)
    .then((result) => {
      userSignupOK = true;
    })
    .catch((error: AuthError) => {});

  // Enter the user data into the firestore
  await addUserData({
    username: username,
    email: email,
    city: city,
    country: country,
  }).then((response) => {
    userDataAdditionOK = true;
  });

  if (userDataAdditionOK && userSignupOK) {
    return res.status(400).json({ message: "New user created", serverError: "No error", error: 0 });
  } else {
    return res.status(400).json({ message: "New user could not be created.", error: 1 });
  }
}

export { createNewUserController, monitorRetries };
