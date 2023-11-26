import React, { useEffect, useState } from "react";

import Logo from "../assets/images/logo-white.svg";
import Navbar from "../Layouts/CommonLayouts/Navbar4";

import Fashion from "../assets/images/portfolio/fashion-model-1200-865.jpg";
import FunnyDog from "../assets/images/portfolio/funny-dog-1200-865.jpg";
import Creative from "../assets/images/portfolio/creative-branding-1200-865.jpg";
import Colorib from "../assets/images/portfolio/colibri-creative-1200-865.jpg";
import Luxury from "../assets/images/portfolio/luxury-car-1200-865.jpg";
import Potraite from "../assets/images/portfolio/portrait-inspiration-1200-865.jpg";
import { Col, Container, Row } from "reactstrap";

const InteractiveDark = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  useEffect(() => {
    const hoverImage = document.querySelectorAll(".interactive-links-image");
    hoverImage.forEach((item) => {
      item.nextSibling.addEventListener("mouseenter", function () {
        item.closest(".nav-item").firstChild.classList.add("hover");
        item.closest(".nav-item").firstChild.classList.remove("transition-end");
      });
      item.nextSibling.addEventListener("mouseleave", function () {
        item.closest(".nav-item").firstChild.classList.remove("hover");
        item.closest(".nav-item").firstChild.classList.add("transition-end");
      });
    });
  });

  //meta title
  document.title = "Themebau | Interactive Dark";
  return (
    <React.Fragment>
      <Navbar navClass="navbar-dark bg-dark" styleClass="2" />
      <div className="content-wrap bg-dark" id="content-wrap">
        <div className="shape align-items-end justify-content-end">
          <svg
            data-rellax-speed="-1"
            className="mb-160"
            width="390"
            height="641"
            viewBox="0 0 390 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="320.5" cy="320.5" r="320.5" fill="#202020" />
          </svg>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="col-12">
              <div className="pt-100 pb-160">
                <ul className="nav flex-column interactive-links interactive-links-style-2 text-white">
                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={Fashion}
                      alt=""
                    />
                    <a href="/portfolio-single-style-3" className="nav-link h1">
                      Fashion Model
                    </a>
                    <p className="subtitle">photography</p>
                  </li>
                  <div
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    className="cursor"
                  ></div>

                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={FunnyDog}
                      alt=""
                    />
                    <a href="/portfolio-single-style-4" className="nav-link h1">
                      Funny Dog
                    </a>
                    <p className="subtitle">photography</p>
                  </li>
                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={Creative}
                      alt=""
                    />
                    <a href="/portfolio-single-style-5" className="nav-link h1">
                      Creative Branding
                    </a>
                    <p className="subtitle">branding</p>
                  </li>
                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={Colorib}
                      alt=""
                    />
                    <a href="/portfolio-single-style-1" className="nav-link h1">
                      Colibri Creative Project
                    </a>
                    <p className="subtitle">photography</p>
                  </li>
                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={Luxury}
                      alt=""
                    />
                    <a href="/portfolio-single-style-3" className="nav-link h1">
                      Luxury Car Website
                    </a>
                    <p className="subtitle">design</p>
                  </li>
                  <li className="nav-item">
                    <img
                      className="interactive-links-image"
                      src={Potraite}
                      alt=""
                    />
                    <a href="/portfolio-single-style-4" className="nav-link h1">
                      Portrait Inspiration
                    </a>
                    <p className="subtitle">branding</p>
                  </li>
                </ul>
              </div>
              <div className="mt-30 pb-100 ps-lg-3 position-relative">
                <h3 className="text-white mb-60">
                  Do you have a project?
                  <br />
                  Send us a message and let's connect 👋
                </h3>
                <a href="/contact2" className="btn btn-white btn-with-ball">
                  let’s work
                  <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer overflow-hidden pb-60 text-white bg-dark" id="footer">
        <Container className="pb-10">
          <hr className="mb-10 pb-30 border-white" />
          <Row className="gh-1 gv-2">
            <Col className="col-12 col-md mt-md-04">
              <a href="/">
                <img width="108" src={Logo} alt="" />
              </a>
            </Col>
            <Col md={4} className="col-12 mt-md-04">
              <ul className="nav flex-column text-white">
                <li className="nav-item">
                  <a href="callto:+1 202-358-0309" className="nav-link">
                    +1 202-358-0309
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="mailto:hello@themebau.com?subject=Test%20Address%20Email"
                    className="nav-link"
                  >
                    hello@themebau.com
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-auto mt-md-04">
              <ul className="nav text-white nav-gap-sm align-items-center justify-content-center mb-30">
                <li className="nav-item">
                  <a
                    href="/https://facebook.com/runwebrun"
                    className="nav-link"
                  >
                    <svg
                      width="7"
                      height="15"
                      viewBox="0 0 10 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/https://twitter.com/runwebrun" className="nav-link">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 25 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/https://instagram.com/runwebrun"
                    className="nav-link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default InteractiveDark;
