import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const Features = (props) => {
  return (
    <Parallax scaleX={[0.5, 1, 'easeOutCubic']} opacity={[0, 1.5, 'easeOutCubic']} id="features" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div> */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </Parallax>
  );
};
