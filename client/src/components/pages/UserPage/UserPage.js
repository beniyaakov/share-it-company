import React from 'react';
import { Card } from 'antd';
import SliderNews from '../../features/Slider/SliderNews'
import { userPageData } from './UsetPageData';
import './userPageCard.css'

const { Meta } = Card;

const UserPage =()=> {
    return (
        <div>
            <SliderNews />
            <div  className="cardMainStudent">
                {userPageData.map((item) => {
                    return <Card key={item.id}
                        hoverable
                        style={{ width: 320, margin: 10, boxShadow: 2 }}
                        cover={<img alt="example" src={item.img} style={{ width: 300, height: 180, marginLeft: 10 }} />
                        }
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>
                })}
            </div>
            </div>

)}
export default UserPage;
