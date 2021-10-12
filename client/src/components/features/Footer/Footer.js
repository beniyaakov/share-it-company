import React from 'react'
import './footer.css'
import {FacebookOutlined,MailOutlined,InstagramOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <div>
            <FacebookOutlined style={{margin:"25px"}}/>
            <MailOutlined style={{margin:"25px"}}/>
            <InstagramOutlined style={{margin:"25px"}}/> 
        </div>
    )
}
export default Footer
