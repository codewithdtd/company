import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from 'react-scroll-parallax';

export const Testimonials = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth < 600 ? 1 : 3,
    slidesToScroll: 1
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div style={{overflow: "hidden"}} className="section-title text-center">
          <Parallax style={{transition: "all 2s ease"}} startScroll={4500} endScroll={5000} translateX={['-300px','0px']}>
            <h2>What our clients say</h2>
          </Parallax>
        </div>
        {props.data ?
          <Slider {...settings}>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}+${i}`} className="item">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </Slider> 
        : "loading"}
      </div>
    </div>
  );
};
