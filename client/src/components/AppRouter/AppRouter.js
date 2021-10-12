import Courses from '../pages/Courses/Courses';
import React,{useContext} from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider"
import Profile from '../features/Profile/Profile';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Students from '../pages/Students/Students';
import StudyContent from '../pages/StudyContent/StudyContent';
import UserPage from '../pages/UserPage/UserPage';


const AppRouter = () => {
    const { userClearLocalStorage } = useContext(AuthContext);

    if (userClearLocalStorage) {
      return <Redirect to='/logout' />;
    }
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/StudyContent" component={StudyContent} />
                <Route exact path="/Courses" component={Courses} />
                <Route exact path="/Instructors" component={Instructors} />
                <Route exact path="/Students" component={Students} />
                <Route exact path="/UserPage" component={UserPage} />
                <Route path="/icon" component={Profile} />
            </Switch>
        </div>
    )
}

export default AppRouter;
