import Courses from "../pages/Courses/Courses";
import ProtectedRoute from "./ProtectedRoute";
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import Profile from "../features/Profile/Profile";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Students from "../pages/Students/Students";
import StudyContent from "../pages/StudyContent/StudyContent";
import Login from "../features/Form/Login/Login";
import logout from "../Context/AuthContextProvider";
import UserPage from "../pages/UserPage/UserPage";
import Registration from "../features/Form/Registration/Registration";


const AppRouter = () => {
  const { userClearLocalStorage } = useContext(AuthContext);

  if (userClearLocalStorage) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Switch>
        {/* <ProtectedRoute path="/" component={}/> */}
        <Route exact path="/" component={Home} />
        <Route path="/StudyContent" component={StudyContent} />
        <Route path="/Courses" component={Courses} />
        <Route path="/Instructors" component={Instructors} />
        <Route path="/Students" component={Students} />
        <Route path="/UserPage" component={UserPage} />
        <Route path="/icon" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={logout} />
        <Route path="/Registration" component={Registration} />
      </Switch>
    </div>
  );
};

export default AppRouter;
