import React, { useEffect, useState } from "react";
import { ParallaxBanner } from 'react-scroll-parallax';

export const Header = (props) => {
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoad(true);
    }, 50);
  }, []);

  return (
    <header id="header">
      <ParallaxBanner
        layers={[
          { image: 'img/intro-bg-4.jpg', scale: [1, 1.8, 'easeInQuad'] },
        ]}
        className="aspect-[2/1]"
      >
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className={`col-md-8 col-md-offset-2 intro-text ${pageLoad ? 'intro-text-show' : ''}`}>
                <h1> 
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a 
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="btn btn-custom btn-custom-contact btn-lg page-scroll"
                >
                  Contact Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      </ParallaxBanner>
    </header>
  );
};
