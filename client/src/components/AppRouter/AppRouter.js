import Courses from '../pages/Courses/Courses';
import { useEffect } from "react";
import ProtectedRoute from './ProtectedRoute';
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import Profile from '../features/Profile/Profile';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Students from '../pages/Students/Students';
import StudyContent from '../pages/StudyContent/StudyContent';
import Login from '../features/Form/Login/Login';
import logout from '../Context/AuthContextProvider';
import UserPage from '../pages/UserPage/UserPage';
import Registration from '../features/Form/Registration/Registration';
import Games from '../pages/Games/Games';
import { Accessibility } from "accessibility/src/main";
import './accsibility.css'

const AppRouter = () => {
    useEffect(() => {
        window.addEventListener(
          "load",
          function () {
            new Accessibility(options);
          },
          false
        );
      });
    
      var labels = {
        resetTitle: "רענן ",
        closeTitle: "סגור ",
        menuTitle: "נגישות ",
        increaseText: "טקסט גדול ",
        decreaseText: "טקסט קטן ",
        increaseTextSpacing: "הגדל את מרווח הטקסט ",
        decreaseTextSpacing: "הקטן את מרווח הטקסט ",
        invertColors: "הפוך צבעים ",
        grayHues: "גוונים אפורים ",
        underlineLinks: "קישורים תחתונים ",
        bigCursor: "סמן גדול ",
        readingGuide: "מדריך קריאה ",
        textToSpeech: "טקסט לדיבור ",
        speechToText: "דיבור לטקסט ",
      };
      
      var options = { labels: labels };
      options.textToSpeechLang = "he";
      options.speechToTextLang = "he";
    
  const { userClearLocalStorage } = useContext(AuthContext);

  if (userClearLocalStorage) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute path='/StudyContent' component={StudyContent} />
        <ProtectedRoute path='/Courses' component={Courses} />
        <ProtectedRoute path='/Instructors' component={Instructors} />
        <ProtectedRoute path='/Students' component={Students} />
        <ProtectedRoute path='/Games' component={Games} />
        <ProtectedRoute path='/UserPage' component={UserPage} />
        <ProtectedRoute path='/icon' component={Profile} />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/logout' component={logout} />
        <Route path='/Registration' component={Registration} />
      </Switch>
    </div>
  );
};

export default AppRouter;
