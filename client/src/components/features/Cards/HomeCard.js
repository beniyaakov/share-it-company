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
                style={{ width: 320, margin: 10, border: 'none' }}
                className='cardHome'
              >
                <i class={item.icon} style={{ fontSize: 180, margin: 10 }}></i>
                <h1>{item.title} </h1>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
