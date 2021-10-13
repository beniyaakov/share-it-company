import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./slider.css";

const data = [{
    title: "חדשות חדשות חדשות חדשות חדשות חדשות ",
    urlToImage: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/147094332_3997809583602981_5771479591692266898_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=y6gWZcs_y2MAX_OgrfG&_nc_ht=scontent.fhfa1-1.fna&oh=9e4a46e6958f418cdedc181758f58c1a&oe=618A43EA",
    description: "ghcdhjvhgdskdfvghcdjkfbvhcuy hjdekckfh"
},
{
    title: "חדשות חדשות חדשות חדשות חדשות חדשות ",
    urlToImage: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/147094332_3997809583602981_5771479591692266898_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=y6gWZcs_y2MAX_OgrfG&_nc_ht=scontent.fhfa1-1.fna&oh=9e4a46e6958f418cdedc181758f58c1a&oe=618A43EA",
    description: "ghcdhjvhgdskdfvghcdjkfbvhcuy hjdekckfh"
},
{
    title: "חדשות חדשות חדשות חדשות חדשות חדשות ",
    urlToImage: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/147094332_3997809583602981_5771479591692266898_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=y6gWZcs_y2MAX_OgrfG&_nc_ht=scontent.fhfa1-1.fna&oh=9e4a46e6958f418cdedc181758f58c1a&oe=618A43EA",
    description: "ghcdhjvhgdskdfvghcdjkfbvhcuy hjdekckfh"
},
]

const SliderNews = () => {
    // const [data, setData] = useState([]);
    // const getNews = () => {
    //     fetch("https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey=b3637dca5e644f068ec9b6bc7375e81b")
    //         .then(res => res.json())
    //         .then((res) => setData(res?.articles))
    //         .catch(err => console.log(err))
    // }
    // getNews();
    // useEffect(() => {
    //     getNews()
    // }, []);
    return (
        <div className="carouselMain">
        <Carousel autoplay>
                {data?.map((slide) => (
                    <div>
                        <h1 className="headerSlider">{slide?.title}</h1>
                        <img src={slide?.urlToImage} id="img-slider" alt="slider-img" />
                        {/* <p className="descSlider">{slide?.description}</p> */}
                    </div>
                ))}
          
        </Carousel>
        </div>

    );
};
export default SliderNews;


