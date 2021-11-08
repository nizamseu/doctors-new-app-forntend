import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseInital from "../Firebase/firebaseInitialized";

firebaseInital();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  console.log(user);
  const provider = new GoogleAuthProvider();

  //signing with google

  const google = () => {
    signInWithPopup(auth, provider)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //log Out
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //auth state Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  return {
    google,
    user,
    logOut,
  };
};

export default useFirebase;
