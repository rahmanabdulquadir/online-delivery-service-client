import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email, password)
  }

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleSignIn,
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
