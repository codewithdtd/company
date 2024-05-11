import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => {
              if(i%2 === 0)
                return <Parallax translateX={['-300px','50px','easeOutCubic']} opacity={[0, 3,'easeOutCubic']}>  
                <div key={`${d.name}-${i}`} className="row">
                  {" "}
                  <div className="col-md-6 col-xs-6 image">
                    <img src={d.image} alt="" />
                  </div>
                  <div className="service-desc col-xs-6 col-md-6">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <button className="">LEARN MORE</button>
                  </div>
                </div>
                </Parallax>
              else 
              return <Parallax startScroll={2000} endScroll={4000} translateX={['300px','-30px','easeOutCubic']} opacity={[0, 3,'easeOutCubic']}>  
                <div key={`${d.name}-${i}`} className="row">
                  {" "}
                  <div className="service-desc col-md-6 col-xs-6">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <button className="">LEARN MORE</button>
                  </div>
                  <div className="col-md-6 col-xs-6 image">
                    <img src={d.image} alt="" />
                  </div>
                </div>
                </Parallax>
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};
