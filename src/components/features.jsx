import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const Features = (props) => {
  return (
    <div id="features">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div> */}
        <div className="container">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  <Parallax startScroll={300} endScroll={500} style={{transition: "all 0.2s ease-in-out"}} translateY={["50px", "0px", 'easeOutCubic']} opacity={[0, 1, 'easeOutCubic']} className="text-center">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </Parallax>
                </div>
              ))
              : "Loading..."}
        </div>
      </div>
  );
};
