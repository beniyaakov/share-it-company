import Courses from '../pages/Courses/Courses';
import ProtectedRoute from "./ProtectedRoute"
import React,{useContext} from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider"
import Profile from '../features/Profile/Profile';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Students from '../pages/Students/Students';
import StudyContent from '../pages/StudyContent/StudyContent';
import Login from "../features/Form/Login/Login"
import logout from "../Context/AuthContextProvider"

const AppRouter = () => {
    const { userClearLocalStorage } = useContext(AuthContext);

    if (userClearLocalStorage) {
      return <Redirect to='/login' />;
    }

    return (
        <div>
            <Switch>
                {/* <ProtectedRoute path="/" component={}/> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/StudyContent" component={StudyContent} />
                <Route exact path="/Courses" component={Courses} />
                <Route exact path="/Instructors" component={Instructors} />
                <Route exact path="/Students" component={Students} />
                <Route path="/icon" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="logout" component={logout}/>
            </Switch>
        </div>
    )
}

export default AppRouter;
