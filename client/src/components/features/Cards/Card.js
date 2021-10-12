import React from 'react'
import { Card } from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;

const CardComponent = (props) =>{
    const {title,className,description,img,link}=props;
    
    return (
    <Link to={link}><Card
        hoverable
        style={{ width: 240 }}
        className={className}
        cover={<img alt="example" src={img} />}>
        <Meta title={title} description={description} />
      </Card>
      </Link>   )
}
export default CardComponent;
