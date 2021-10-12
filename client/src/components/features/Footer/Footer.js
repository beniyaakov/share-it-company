import React from 'react'
import './footer.css'
import {FacebookOutlined,MailOutlined,InstagramOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footerMain">
            <a href="https://www.facebook.com/tech.career"><FacebookOutlined style={{margin:"25px"}} ></FacebookOutlined></a>
            <a href="https://mail.google.com/"> <MailOutlined style={{margin:"25px"}}/></a>
             <a href="https://www.instagram.com/techcareer/?utm_medium=copy_link "> <InstagramOutlined style={{margin:"25px"}}/> </a>
        </div>
    )
}
export default Footer
