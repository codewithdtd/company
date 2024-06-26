import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
export const Image = ({ text, title, smallImage, id }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <Link to={`/detail/${id}`} title={title} data-lightbox-gallery="gallery1" onClick={() => scroll.scrollToTop()}>
          <div className={`hover-text`}>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </Link>{" "}
      </div>
    </div>
  );
};
