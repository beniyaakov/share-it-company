import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Button from '../Button/Button'


const NavBar = () => {
    return (
       
        <div className="navBarMain">
             <Link to='/Login'><Button type="primary" className="button" text="התחברות"></Button> </Link>
             <img src="logo share it.jpg" width="100" />
             <Link to="../"><img src="https://www.ibh.co.il/wp-content/uploads/2018/06/%D7%98%D7%A7-%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94-2.png" width="100" /></Link>
 
        </div>
    )
}
export default NavBar
