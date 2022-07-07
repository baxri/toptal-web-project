import React, { useCallback, useEffect, useState } from "react";

import firebase from "../FirebaseConfig";

const defaultValue: any = {
  isLoading: false,
};
export const authContext = React.createContext(defaultValue);

export function AuthProvider(props: any) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOnAuthChange = useCallback(async () => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(async (authUser: any) => {
        if (authUser) {
          setIsAuthenticated(true);
          setUser(authUser);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleOnAuthChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogin = useCallback(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        "giorgi.bibilashvili89@gmail.com",
        "gio123456"
      );
  }, []);

  const onLogOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  return (
    <authContext.Provider
      value={{
        isAuthenticated,
        user,
        onLogin,
        onLogOut,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export const useAuthentication = () => React.useContext(authContext);
