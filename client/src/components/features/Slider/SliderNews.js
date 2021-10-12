import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./slider.css";

const SliderNews = () => {
    const [data, setData] = useState([]);
    const getNews = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey=112178c7335743639fee2e8c081cce20")
            .then(res => res.json())
            .then((res) => setData(res?.articles))
            .catch(err => console.log(err))
    }
    console.log(data);
    useEffect(() => {
        getNews()
    }, [data, setData]);
    return (
        <Carousel autoplay>
            {data?.map((slide) => (
                <div>
                    <h1>{slide?.title}</h1>
                    <img src={slide?.urlToImage} id="img-slider" alt="slider-img" />
                    <p>{slide?.description}</p>
                </div>
            ))}
        </Carousel>

    );
};
export default SliderNews;