import React from "react";
// import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <RouterLink className="navbar-brand page-scroll" to="/" onClick={() => scroll.scrollToTop()}>
            <span>
              <img src="../img/logo.png" alt="" />
              Pandobit
            </span>
          </RouterLink>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <Link to="features" className="page-scroll">
                Features
              </Link>
            </li> */}
            <li>
              <ScrollLink smooth={true}  to="about" className="page-scroll">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink smooth={true}  to="services" className="page-scroll">
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink smooth={true}  to="case-studies" className="page-scroll">
                Case studies
              </ScrollLink>
            </li>
            <li>
              <ScrollLink smooth={true}  to="testimonials" className="page-scroll">
                Conferences
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink smooth={true}  to="team" className="page-scroll">
                Team
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink smooth={true}  to="contact" className="page-scroll">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
