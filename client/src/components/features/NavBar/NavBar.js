import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Button from '../Button/Button'
import Profile from '../Profile/Profile'
import { AuthContext } from "../../Context/AuthContextProvider";
import {Redirect} from "react-router-dom"

const NavBar = () => {
    const { isLogin } = useContext(AuthContext);
    
    return (
       
        <div className="navBarMain">
                  {isLogin && <Profile />}
{!isLogin&& 
             <Link to='/Login'><Button type="primary" className="button" text="התחברות" ></Button> </Link>
}
             <img src="logo share it2.png" width="170" height="80px" style={{marginTop:10}} />
             <Link to="../"><img src="https://www.ibh.co.il/wp-content/uploads/2018/06/%D7%98%D7%A7-%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94-2.png" style={{width:100,marginRight:15}} /></Link>
        </div>
    )
}
export default NavBar
