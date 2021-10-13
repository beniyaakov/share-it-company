import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import 'antd/dist/antd.css';
import Button from '../Button/Button'
import Profile from '../Profile/Profile'
import { AuthContext } from "../../Context/AuthContextProvider";
import {Redirect} from "react-router-dom"
import { Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';



const NavBar = () => {
    const { isLogin } = useContext(AuthContext);
    
    return (
       
        <div className="navBarMain">
                  {isLogin && <Profile />}
{!isLogin&& 
             <Link to='/Login'><Button type="primary" className="button" text="התחברות" ></Button> </Link>
}
{isLogin&&
        <Link to=""><Button type="primary" className="button" text="פורום" className="porum"  ></Button></Link>
        }
<Link to="/userPage">    <img src="logo share it2.png" width="170" height="80px" style={{marginTop:10}} /></Link>
         
        </div>
    )
}
export default NavBar
