import { NextFunction, Response, Request } from "express";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { fireStoreAuth, firebaseAuth } from "../database/firebase";
import { doc } from "firebase/firestore";

async function loginExistingUserController(req: Request, res: Response, next: NextFunction) {
  // Get the username and password from the body
  let { username, password, rememberMeFlag } = req.body;
  await signInWithEmailAndPassword(firebaseAuth, username, password)
    .then(async (user) => {
      // Update the remember me flag in the firestore DB
      // Find the reference of the user from the database
      let userRef = collection(fireStoreAuth, "users");
      const q = query(userRef, where("email", "==", username));
      try {
        const existingUsers = await getDocs(q);
        let { email } = existingUsers.docs[0].data();
        let existingUserID = existingUsers.docs[0].id;
        try {
          let updateUserData = await updateDoc(doc(fireStoreAuth, "users", existingUserID), { rememberMeFlag: rememberMeFlag });
        } catch (e) {
          return res.status(400).json({ message: e, error: 1 });
        }
      } catch (e) {
        return res.status(400).json({ message: { code: "User does not exist." }, error: 1 });
      }

      // Update the user flag data
      return res.status(200).json({ message: "Successfull login.", error: 0 });
    })
    .catch((error) => {
      return res.status(400).json({ message: error, error: 1 });
    });
}

export default loginExistingUserController;
