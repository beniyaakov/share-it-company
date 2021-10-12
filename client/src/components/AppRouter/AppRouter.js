import React,{useContext} from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider"
import Profile from '../features/Profile/Profile';
import Home from '../pages/Home/Home';
import Login from "../features/Form/Login/Login"


const AppRouter = () => {
    const { userClearLocalStorage } = useContext(AuthContext);

    if (userClearLocalStorage) {
      return <Redirect to='/logout' />;
    }

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/icon" component={Profile} />
                <Route path="/login" component={Login} />

            </Switch>
        </div>
    )
}

export default AppRouter;
