import { NextFunction, Response, Request } from "express";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../database/firebase";

async function loginExistingUserController(req: Request, res: Response, next: NextFunction) {
  // Get the username and password from the body
  let { username, password } = req.body;
  return res.status(200).json(`Login user working. ${username}, ${password}`);

  await signInWithEmailAndPassword(firebaseAuth, username, password)
    .then((user) => {
      return res.status(200).json({ message: "Successfull login.", error: 0 });
    })
    .catch((error) => {
      return res.status(400).json({ message: error, error: 1 });
    });
}

export default loginExistingUserController;
