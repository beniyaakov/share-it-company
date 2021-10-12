import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';


const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default AppRouter;
