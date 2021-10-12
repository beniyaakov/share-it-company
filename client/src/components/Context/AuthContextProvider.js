import React,{context} from 'react'
import { useState, useEffect, createContext } from "react";


const API = "http://localhost:8080";

export const AuthContext = createContext({
  isLogin: false,
  userClearLocalStorage: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [userClearLocalStorage, setUserClearLocalStorage] = useState(false);
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  const login = async (user) => {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/api/userAuth/login`, options)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("useremail", data.email);
          setIsLogin(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserClearLocalStorage(false);
    setIsLogin(false);
  };


  useEffect(() => {
    window.addEventListener("storage", () => setUserClearLocalStorage(true));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        userClearLocalStorage,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
