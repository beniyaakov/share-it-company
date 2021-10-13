import React from 'react';
import { HomeCardData } from './HomeCardData';
import './HomeCard.css';
const HomeCard = () => {
  return (
    <div className='homeCardMain'>
      <div className='cardContainer'>
        <div className='cardMain'>
          {HomeCardData.map((item) => {
            return (
              <div
                style={{ width: 320, margin: 10, border: 'none',padding:65 }}
                className='cardHome'
              >
                <i class={item.icon} style={{ fontSize: 180, margin: 10, color:"white" }}></i>
                <h1 style={{ fontSize: 20, margin: 10, color:"white" }} >{item.title} </h1>
                <p style={{ fontSize: 15, margin: 10, color:"white" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
