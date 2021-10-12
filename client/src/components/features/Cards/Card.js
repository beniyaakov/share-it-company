import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = (props) =>{
    const {title,className,description,img}=props;
    
    return (<Card
        hoverable
        style={{ width: 240 }}
        className={className}
        cover={<img alt="example" src={img} />}>
        <Meta title={title} description={description} />
      </Card>   )
    
}
export default CardComponent;
