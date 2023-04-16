import { NextFunction, Request, Response, response } from "express";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getTimeStamp } from "../utils/Utils";
import { fireStoreAuth, firebaseAuth } from "../database/firebase";
import { FirebaseError } from "firebase/app";

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

function removeSecretData(data: any) {
  let { password1, password2, ...rest } = data;
  return rest;
}

async function createNewUserController(req: Request, res: Response, next: NextFunction) {
  // Extract username and passwords
  let { username, password1, password2, email, city, country } = req.body;

  // Compare passwords
  if (password1 !== password2) {
    return res.status(400).json({ message: "Passwords do not match ", error: 1 });
  }

  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password1);
    await addDoc(collection(fireStoreAuth, "users", ""), removeSecretData(req.body));
    return res.status(200).json({ message: "New user has been created.", error: 0 });
  } catch (serverError) {
    return res.status(400).json({ message: "New user could not be created.", serverError: serverError, error: 1 });
  }
}

export { createNewUserController, monitorRetries };
