import React from "react";
import { Parallax } from 'react-scroll-parallax';
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>About Us</h2>
              {props.data
                ? props.data.content.map((d, i) => {
                  if(i%2 !== 0)
                    return <div key={i} className="row content content--two">
                              <div style={{overflow: "hidden"}} className="col-xs-12 col-md-6">
                                <Parallax style={{transition: "all 0.5s ease-in"}} startScroll={800} endScroll={1100} translateX={['-200px','20px','easeOutCubic']} opacity={[0.5, 5,'easeOutCubic']}>
                                  {" "}
                                  <img src={d.image} className="img-responsive" alt="" />{" "}
                                </Parallax>
                              </div>
                            <div style={{overflow: "hidden"}} className="col-xs-12 col-md-6 content-text">
                              <Parallax style={{transition: "all 0.5s ease-in"}} startScroll={800} endScroll={1100} translateX={['200px','20px','easeOutCubic']} opacity={[0.5, 5,'easeOutCubic']}>
                                <h3>{d.title}</h3>
                                {props.data
                                  ? d.paragraph.map((p, i) => (
                                      <p key={i}>{p}</p>
                                    )
                                  )
                                  : "loading"}
                              </Parallax>
                            </div>
                          </div>
                  else 
                    return <div key="i" className="row content content">
                            <div style={{overflow: "hidden"}} className="col-xs-12 col-md-6 content-text">
                              <Parallax style={{transition: "all 0.5s ease-in"}} startScroll={800} endScroll={1100} translateX={['-200px','0px','easeOutCubic']} opacity={[0.5, 5,'easeOutCubic']}>
                                <h3>{d.title}</h3>
                                {props.data
                                  ? d.paragraph.map((p, i) => (
                                      <p key={i}>{p}</p>
                                    )
                                  )
                                  : "loading"}
                              </Parallax>
                            </div>
                            <div style={{overflow: "hidden"}} className="col-xs-12 col-md-6">
                              <Parallax style={{transition: "all 0.5s ease-in"}} startScroll={800} endScroll={1100} translateX={['200px','0px','easeOutCubic']} opacity={[0.5, 5,'easeOutCubic']}>
                                {" "}
                                <img src={d.image} className="img-responsive" alt="" />{" "}
                              </Parallax>
                            </div>
                          </div>
                  })
                : "loading"}
                <Parallax style={{transition: "all 0.2s ease-in"}} opacity={[0,4]}>
                  <div className="row footer">
                    {props.data
                        ? props.data.footer.map((p, i) => (
                          <div key={`${p.title}-${i}`} className="col-xs-12 col-md-4">              
                            <h3><i className="fa fa-check"></i>{p.title}</h3>
                            <p>{p.paragraph}</p>
                          </div>
                          )
                        )
                        : "loading"}
                  </div>
                </Parallax>
            </div>
            <Parallax style={{transition: "all 0.5s ease-in"}} opacity={[0, 4]}>
                
            {props.data ? (
              <div className="row founder">
                <img src={props.data.founder.image} alt="" />
                <h4>{props.data.founder.name}</h4>
                <p>FOUNDER</p>
              </div>
            )
            : "loading"}
            </Parallax>

          </div>
        </div>
      </div>
    </div>
  );
};
