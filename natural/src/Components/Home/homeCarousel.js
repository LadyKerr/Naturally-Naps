import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./homeCarousel.css";

import { homeFeatured } from '../../Data/Data'


function HomeCarousel() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="Features">
            <Slider {...settings}>
                {homeFeatured.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeCarousel;
