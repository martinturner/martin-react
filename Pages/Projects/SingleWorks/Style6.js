import React, { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import Navbar from "../../../Layouts/CommonLayouts/Navbar3";
import Footer from "../../../Layouts/CommonLayouts/Footer2";

import imgs1 from "../../../assets/images/single-portfolio/style-6-slide-1-1920-1080.jpg";
import imgs2 from "../../../assets/images/single-portfolio/style-6-slide-2-1920-1080.jpg";
import imgs3 from "../../../assets/images/single-portfolio/style-6-slide-3-1920-1080.jpg";

import img1 from "../../../assets/images/single-portfolio/style-6-1-740-700.jpg";
import img2 from "../../../assets/images/single-portfolio/style-6-2-740-700.jpg";
import img3 from "../../../assets/images/single-portfolio/style-6-3-740-700.jpg";
import img4 from "../../../assets/images/single-portfolio/style-6-4-740-700.jpg";
import img5 from "../../../assets/images/single-portfolio/style-6-5-740-700.jpg";
import img6 from "../../../assets/images/single-portfolio/style-6-6-740-700.jpg";
import { Col, Container, Row } from "reactstrap";

const Style6 = () => {
  //meta title
  document.title = "Themebau | Single Work 6";
  const images = [img1, img2, img3, img4, img5, img6];
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);
  return (
    <React.Fragment>
      <div>
        <Navbar navClass="sticky" />
        {isGallery ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            enableZoom={true}
            onCloseRequest={() => {
              setisGallery(false);
            }}
            onMovePrevRequest={() => {
              setphotoIndex((photoIndex + images.length - 1) % images.length);
            }}
            onMoveNextRequest={() => {
              setphotoIndex((photoIndex + 1) % images.length);
            }}
          />
        ) : null}
        <div className="content-wrap" id="content-wrap">
          <Container className="container mt-n10">
            <div className="pt-60 pb-130 mt-30 mb-n10 text-center">
              <h1 className="mb-n7 ">The Tonik</h1>
            </div>

            <Swiper
              className="swiper mb-160"
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                // dynamicBullets: true,
              }}
              swiperslide={"1"}
              navigation={true}
              grabCursor={true}
              modules={[Pagination, Navigation, Autoplay]}
              loop={true}
              autoplay={{ delay: 25000, disableOnInteraction: false }}
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="gallery-item gallery-item-sm"
                      data-fancybox="gallery-slider"
                      data-aos="fade"
                    >
                      <img
                        data-swiper-parallax-x="20%"
                        className="swiper-image"
                        src={imgs1}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="gallery-item gallery-item-sm"
                      data-fancybox="gallery-slider"
                      data-aos="fade"
                    >
                      <img
                        data-swiper-parallax-x="20%"
                        className="swiper-image"
                        src={imgs2}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="gallery-item gallery-item-sm"
                      data-fancybox="gallery-slider"
                      data-aos="fade"
                    >
                      <img
                        data-swiper-parallax-x="20%"
                        className="swiper-image"
                        src={imgs3}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
            <div className="swiper-button-prev bg-white">
              <svg
                width="26"
                height="11"
                viewBox="0 0 26 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1L1 5.5L5.5 10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5.5H1"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="swiper-button-next bg-white">
              <svg
                width="26"
                height="11"
                viewBox="0 0 26 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 1L25 5.5L20.5 10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 5.5H25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Row className="gv-3 justify-content-center mb-130">
              <Col lg={7} className="col-12 text-center" data-aos="fade-up">
                <h2 className="h3 mb-30 mt-n10 ">About project</h2>
                <p className="mb-0 pt-10 ">
                  Wherein herb kind creepeth male living life be image. They're
                  NavLink it morning day. Isn't fruit of every day. Bearing our
                  third that night kind. Make rule midst under bring good dry
                  moving. Yielding god wherein heaven deep.
                </p>
              </Col>
              <Col lg={10} className="col-12" data-aos="fade-up">
                <hr className="mt-0 mb-30" />
                <Row className="justify-content-around gh-1">
                  <Col className="col-auto mb-8">
                    <span className="fw-medium me-8">Date:</span> June 10, 2020
                  </Col>
                  <Col className="col-auto mb-8">
                    <span className="fw-medium me-8">Category:</span> Branding
                  </Col>
                  <Col className="col-auto mb-8">
                    <span className="fw-medium me-8">Client:</span> Brian Newton
                  </Col>
                  <Col className="col-auto mb-8">
                    <span className="fw-medium">Share:</span>
                    <ul className="nav nav-gap-sm d-inline-flex align-items-center ms-4">
                      <li className="nav-item">
                        <NavLink
                          to="/https://facebook.com/runwebrun"
                          className="nav-link"
                        >
                          <svg
                            width="6"
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
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/https://twitter.com/runwebrun"
                          className="nav-link"
                        >
                          <svg
                            width="15"
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
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/https://instagram.com/runwebrun"
                          className="nav-link"
                        >
                          <svg
                            width="11"
                            height="14"
                            viewBox="0 0 11 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.84375 0C2.90469 0 0 1.91862 0 5.02377C0 6.99849 1.13437 8.12049 1.82187 8.12049C2.10547 8.12049 2.26875 7.34631 2.26875 7.12752C2.26875 6.86665 1.58984 6.31126 1.58984 5.22573C1.58984 2.9705 3.34297 1.37165 5.61172 1.37165C7.5625 1.37165 9.00625 2.45718 9.00625 4.45154C9.00625 5.941 8.39609 8.73479 6.41953 8.73479C5.70625 8.73479 5.09609 8.22989 5.09609 7.5062C5.09609 6.4459 5.85234 5.41927 5.85234 4.32532C5.85234 2.46841 3.1625 2.80501 3.1625 5.04901C3.1625 5.52025 3.22266 6.04198 3.4375 6.47115C3.04219 8.13732 2.23438 10.6198 2.23438 12.3364C2.23438 12.8666 2.31172 13.3883 2.36328 13.9184C2.46068 14.025 2.41198 14.0138 2.56094 13.9605C4.00469 12.0251 3.95313 11.6464 4.60625 9.11346C4.95859 9.76983 5.86953 10.1233 6.59141 10.1233C9.63359 10.1233 11 7.22008 11 4.60301C11 1.81764 8.54219 0 5.84375 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </NavLink>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="gh-1 gv-1">
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img1}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(0);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img2}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(1);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img3}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(2);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img4}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(3);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img5}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(4);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
              <Col sm={6} md={4} className="col-12">
                <div
                  className="gallery-item text-white gallery-item-lg"
                  data-fancybox="gallery"
                  data-aos="fade"
                >
                  <img
                    src={img6}
                    onClick={() => {
                      setisGallery(true);
                      setphotoIndex(5);
                    }}
                    alt=""
                  />
                  <span
                    className="background-color"
                    style={{ backgroundColor: "rgba(14, 14, 14, .2)" }}
                  ></span>
                  <span className="gallery-item-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2.5V0H1.25C0.559609 0 0 0.559609 0 1.25V10H2.5V4.2625L14.1125 15.875L15.875 14.1125L4.2625 2.5H10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.75 0H30V2.5H35.7375L24.125 14.1125L25.8875 15.875L37.5 4.2625V10H40V1.25C40 0.559609 39.4404 0 38.75 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.5 35.7375L25.8875 24.125L24.125 25.8875L35.7375 37.5H30V40H38.75C39.4404 40 40 39.4404 40 38.75V30H37.5V35.7375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1125 24.1125L2.5 35.7375V30H0V38.75C0 39.4404 0.559609 40 1.25 40H10V37.5H4.2625L15.875 25.8875L14.1125 24.1125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </Col>
            </Row>
            <div className="page-navigation mt-160">
              <NavLink to="/portfolio-single-style-5" className="btn btn-clean">
                <svg
                  className="icon-arrow icon-arrow-left"
                  width="26"
                  height="11"
                  viewBox="0 0 26 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 1L1 5.5L5.5 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5.5H1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                prev<span className="d-none d-sm-inline"> project</span>
              </NavLink>
              <NavLink
                to="/portfolio-col-1-style-2"
                className="btn btn-light btn-circle btn-xs"
              >
                all
              </NavLink>
              <NavLink to="/portfolio-single-style-1" className="btn btn-clean">
                next<span className="d-none d-sm-inline"> project</span>
                <svg
                  className="icon-arrow icon-arrow-right"
                  width="26"
                  height="11"
                  viewBox="0 0 26 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 1L25 5.5L20.5 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 5.5H25"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Style6;
