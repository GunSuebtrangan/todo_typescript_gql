import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import firebaseConfig from "../config";

// export const Authcontext = React.createContext<firebase.User | null>(null);

export const Authcontext = React.createContext<firebase.User | null>(null);
export const AuthProvider = ({ children }:any) => {
    // const { children } = props;
    const [currentUser, setcurrentUser] =useState<firebase.User | null>(null);;
    useEffect(() => {
      firebaseConfig.auth().onAuthStateChanged((firebaseUser) => {
        setcurrentUser(firebaseUser);
      });
    }, []);
    return (
      <Authcontext.Provider value={currentUser}>
        {children}
      </Authcontext.Provider>
    );
  };
