import React from 'react'
import './footer.css'
import {FacebookOutlined,MailOutlined,InstagramOutlined } from '@ant-design/icons'


const Footer = () => {
    return (
        <div className="footerMain">
            <a href="https://www.facebook.com/tech.career"><FacebookOutlined style={{margin:"25px",color:"#87b4bb"}} ></FacebookOutlined></a>
            <a href="https://mail.google.com/"> <MailOutlined style={{margin:"25px",color:"#ede572"}}/></a>
             <a href="https://www.instagram.com/techcareer/?utm_medium=copy_link "> <InstagramOutlined style={{margin:"25px",color:"#f07575"}}/> </a>
        </div>
    )
}
export default Footer
