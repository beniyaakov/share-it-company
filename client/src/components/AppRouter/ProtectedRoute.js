import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../Context/AuthContextProvider"


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isLogin } = useContext(AuthContext);


  return (
    <div>
      <Route
        {...rest} render={(props) => {
          if (isLogin) {return <Component />} 
          else {
            return (
              <Redirect
                to={{ pathname: "/", state: { form: props.location } }}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
