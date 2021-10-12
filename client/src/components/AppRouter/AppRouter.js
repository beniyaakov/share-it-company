import React,{useContext} from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider"
import Profile from '../features/Profile/Profile';
import Home from '../pages/Home/Home';


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

            </Switch>
        </div>
    )
}

export default AppRouter;
