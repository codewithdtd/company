import { Image } from "./image";
import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const Gallery = (props) => {
  return (
    <div id="case-studies" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Case studies</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-6 col-lg-6"
                  >
                    <Parallax style={{transition: "all 2s ease"}} startScroll={3400} endScroll={3600} scale={[0,1, 'easeInOutQuint']}>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      text={d.text}
                      id={d.id}
                    />
                    </Parallax>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
