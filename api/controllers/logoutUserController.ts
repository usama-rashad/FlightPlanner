import { Request, Response, NextFunction } from "express";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../database/firebase";

async function logoutUserController(req: Request, res: Response, next: NextFunction) {
  try {
    await signOut(firebaseAuth);
    return res.status(200).json({ message: { code: "Signed out" }, error: 0 });
  } catch (e) {
    return res.status(400).json({ message: { code: "Sign out error" }, error: 1 });
  }
}

export { logoutUserController };
