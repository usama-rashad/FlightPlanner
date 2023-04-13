import { NextFunction, Request, Response, response } from "express";
import { AuthError } from "firebase/auth";
import { FirestoreError } from "firebase/firestore";
import { addUserData, createNewUser, fireStoreAuth } from "../database/firebase";
import { getTimeStamp } from "../utils/Utils";
import { FirebaseError } from "firebase/app";
import { error } from "console";

let retryCount = 0;

interface IUserLoginData {
  username: string;
  password1: string;
  password2: string;
  email: string;
  city: string;
  country: string;
}

interface IRegisterResponse {
  message: string;
  serverError1?: string;
  serverError2?: string;
  error: number;
}

function monitorRetries(req: Request, res: Response, next: NextFunction) {
  retryCount++;
  setTimeout(() => (retryCount = 0), 3000);
  next();
}

async function createUser(data: IUserLoginData): Promise<IRegisterResponse> {
  let p = new Promise<IRegisterResponse>(async (res, rej) => {
    await createNewUser(data.email, data.password1)
      .then(async () => {
        return await addUserData({
          username: data.username,
          email: data.email,
          city: data.city,
          country: data.country,
        });
      })
      .catch((error: FirebaseError) => {
        rej({ message: "New user could not be created.", error: 1, serverError: error });
      });
  });
  return p;
}

async function createNewUserController(req: Request, res: Response, next: NextFunction) {
  // Extract username and passwords
  let { username, password1, password2, email, city, country } = req.body;
  // Error messages
  let signupErrorMessage: string = "";
  let createUserEntryErrorMessage: string = "";

  // Compare passwords
  if (password1 !== password2) {
    console.log("Password mismatch. -- " + getTimeStamp());
    return res.status(400).json({ message: "Passwords do not match ", error: 1 });
  }

  createUser({ ...req.body })
    .then(() => {
      return res.status(200).json({ message: "New user has been created.", error: 0 });
    })
    .catch((serverError) => {
      return res.status(400).json({ message: "New user could not be created.", serverError: serverError, error: 1 });
    });
}

export { createNewUserController, monitorRetries };
