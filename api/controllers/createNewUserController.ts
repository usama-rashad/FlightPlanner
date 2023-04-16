import { NextFunction, Request, Response, response } from "express";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getTimeStamp } from "../utils/Utils";
import { fireStoreAuth, firebaseAuth } from "../database/firebase";

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

// Double await i.e. inside function and while calling the function ?????? Check in the morning...

async function createNewUserController(req: Request, res: Response, next: NextFunction) {
  // Extract username and passwords
  let { username, password1, password2, email, city, country } = req.body;

  // Compare passwords
  if (password1 !== password2) {
    console.log("Password mismatch. -- " + getTimeStamp());
    return res.status(400).json({ message: "Passwords do not match ", error: 1 });
  }

  try {
    console.log(`Email : ${email} , Password : ${password1}`);
    await createUserWithEmailAndPassword(firebaseAuth, email, password1);
    console.log("Adding user data");
    await addDoc(collection(fireStoreAuth, "users", ""), removeSecretData(req.body));
    console.log("Added user data");
    return res.status(200).json({ message: "New user has been created.", error: 0 });
  } catch (serverError) {
    return res.status(400).json({ message: "New user could not be created.", serverError: serverError, error: 1 });
  }
}

export { createNewUserController, monitorRetries };
