import React from 'react'
import './footer.css'
import {FacebookOutlined,MailOutlined,InstagramOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footerMain">
            <a href="https://www.facebook.com/tech.career"><FacebookOutlined style={{margin:"25px",color:"#87b4bb"}} ></FacebookOutlined></a>
            <a href="https://mail.google.com/"> <MailOutlined style={{margin:"25px",color:"#ede572"}}/></a>
             <a href="https://www.instagram.com/techcareer/?utm_medium=copy_link "> <InstagramOutlined style={{margin:"25px",color:"#f07575"}}/> </a>
                <a href="https://www.tech-career.org/" >
             <img src="https://www.ibh.co.il/wp-content/uploads/2018/06/%D7%98%D7%A7-%D7%A7%D7%A8%D7%99%D7%99%D7%A8%D7%94-2.png" width="100" />
                </a>
        </div>
    )
}
export default Footer
