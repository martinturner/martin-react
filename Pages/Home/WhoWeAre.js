import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Images
import WebDesign from "../../assets/images/service/web-design.jpg";
import BrandStrategy from "../../assets/images/service/brand-strategy.jpg";
import Packaging from "../../assets/images/service/packaging.jpg";
import ContentProduction from "../../assets/images/service/content-production.jpg";

const WhoWeAre = () => {
  return (
    <React.Fragment>
      <div className="py-160">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="col-12 text-center">
              <p className="subtitle mt-n10">who we are</p>
              <h1 className="h3 mb-0">
                An award-winning design & dev team that is proud of our work 👋
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center gh-5 mt-100">
            <Col lg={5}>
              <hr className="mt-0" />
              <p className="lead">
                Over 10 years of combined experience, and know thing or two
                about designing websites and mobile apps.
              </p>
            </Col>
            <Col lg={5}>
              <p>
                Were divided, moved night light darkness winged may also make
                man for. Winged the for Earth creeping appear evening, gathered
                Forth so he. Life that dry of created greater can't also
                gathered female green.
              </p>
              <NavLink to="/about-us" className="btn btn-dark btn-with-ball">
                about us
                <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="px-1" fluid>
        <Row className="gh-1 gv-1 justify-content-center">
          <Col sm={6} lg={5} xl={3} className="col-12">
            <NavLink
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
              to="/single-service"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={WebDesign} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.619 11.85H26.0952C27.6613 11.85 29.1632 12.5032 30.2705 13.6659C31.3779 14.8287 32 16.4057 32 18.05C32 19.6943 31.3779 21.2713 30.2705 22.4341C29.1632 23.5968 27.6613 24.25 26.0952 24.25H24.619M24.619 11.85H1V25.8C1 27.4443 1.62211 29.0213 2.72946 30.1841C3.83682 31.3468 5.33872 32 6.90476 32H18.7143C20.2803 32 21.7822 31.3468 22.8896 30.1841C23.9969 29.0213 24.619 27.4443 24.619 25.8V11.85ZM6.90476 1V5.65M12.8095 1V5.65M18.7143 1V5.65"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">
                  Web Design and Development
                </span>
                <span className="btn btn-clean">
                  read more
                  <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </NavLink>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <NavLink
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
              to="/single-service"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={BrandStrategy} alt="" data-aos="fade-up" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 20.0909C18.8347 20.0909 20.7273 18.2593 20.7273 16C20.7273 13.7407 18.8347 11.9091 16.5 11.9091C14.1653 11.9091 12.2727 13.7407 12.2727 16C12.2727 18.2593 14.1653 20.0909 16.5 20.0909Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.9273 20.0909C26.7397 20.5022 26.6837 20.9584 26.7666 21.4008C26.8495 21.8432 27.0674 22.2513 27.3923 22.5727L27.4768 22.6545C27.7388 22.9078 27.9467 23.2086 28.0885 23.5397C28.2304 23.8708 28.3034 24.2257 28.3034 24.5841C28.3034 24.9425 28.2304 25.2974 28.0885 25.6285C27.9467 25.9596 27.7388 26.2603 27.4768 26.5136C27.2151 26.7672 26.9043 26.9684 26.5621 27.1056C26.22 27.2429 25.8533 27.3135 25.483 27.3135C25.1126 27.3135 24.7459 27.2429 24.4038 27.1056C24.0616 26.9684 23.7508 26.7672 23.4891 26.5136L23.4045 26.4318C23.0725 26.1174 22.6507 25.9066 22.1936 25.8264C21.7365 25.7462 21.265 25.8003 20.84 25.9818C20.4232 26.1547 20.0678 26.4417 19.8174 26.8075C19.5671 27.1734 19.4327 27.6021 19.4309 28.0409V28.2727C19.4309 28.996 19.134 29.6897 18.6055 30.2012C18.077 30.7127 17.3602 31 16.6127 31C15.8653 31 15.1485 30.7127 14.62 30.2012C14.0915 29.6897 13.7945 28.996 13.7945 28.2727V28.15C13.7836 27.6986 13.6327 27.2609 13.3613 26.8937C13.0899 26.5265 12.7106 26.2468 12.2727 26.0909C11.8477 25.9094 11.3763 25.8552 10.9192 25.9354C10.4621 26.0157 10.0403 26.2265 9.70818 26.5409L9.62364 26.6227C9.3619 26.8763 9.05109 27.0775 8.70897 27.2147C8.36685 27.352 8.00013 27.4226 7.62977 27.4226C7.25942 27.4226 6.8927 27.352 6.55058 27.2147C6.20846 27.0775 5.89764 26.8763 5.63591 26.6227C5.37388 26.3694 5.16602 26.0687 5.0242 25.7376C4.88237 25.4065 4.80937 25.0516 4.80937 24.6932C4.80937 24.3348 4.88237 23.9799 5.0242 23.6488C5.16602 23.3177 5.37388 23.0169 5.63591 22.7636L5.72045 22.6818C6.0453 22.3604 6.26322 21.9523 6.3461 21.5099C6.42898 21.0675 6.37303 20.6113 6.18545 20.2C6.00683 19.7967 5.71025 19.4527 5.3322 19.2104C4.95416 18.9681 4.51115 18.8381 4.05773 18.8364H3.81818C3.07075 18.8364 2.35394 18.549 1.82543 18.0376C1.29691 17.5261 1 16.8324 1 16.1091C1 15.3858 1.29691 14.6921 1.82543 14.1806C2.35394 13.6692 3.07075 13.3818 3.81818 13.3818H3.945C4.4114 13.3713 4.86373 13.2252 5.24319 12.9625C5.62265 12.6999 5.91169 12.3328 6.07273 11.9091C6.2603 11.4978 6.31625 11.0416 6.23337 10.5992C6.15049 10.1568 5.93257 9.74865 5.60773 9.42727L5.52318 9.34545C5.26116 9.09216 5.05329 8.79138 4.91147 8.46029C4.76964 8.12921 4.69665 7.77431 4.69665 7.41591C4.69665 7.0575 4.76964 6.70261 4.91147 6.37153C5.05329 6.04044 5.26116 5.73965 5.52318 5.48636C5.78491 5.23279 6.09573 5.03163 6.43785 4.89438C6.77997 4.75713 7.14669 4.68649 7.51705 4.68649C7.8874 4.68649 8.25412 4.75713 8.59624 4.89438C8.93836 5.03163 9.24918 5.23279 9.51091 5.48636L9.59545 5.56818C9.92755 5.88255 10.3493 6.09343 10.8064 6.17364C11.2635 6.25385 11.735 6.1997 12.16 6.01818H12.2727C12.6895 5.84532 13.0449 5.5583 13.2953 5.19245C13.5457 4.8266 13.68 4.39789 13.6818 3.95909V3.72727C13.6818 3.00396 13.9787 2.31026 14.5072 1.7988C15.0358 1.28734 15.7526 1 16.5 1C17.2474 1 17.9642 1.28734 18.4928 1.7988C19.0213 2.31026 19.3182 3.00396 19.3182 3.72727V3.85C19.32 4.2888 19.4543 4.71751 19.7047 5.08336C19.9551 5.44921 20.3105 5.73623 20.7273 5.90909C21.1523 6.09061 21.6237 6.14476 22.0808 6.06455C22.5379 5.98434 22.9597 5.77346 23.2918 5.45909L23.3764 5.37727C23.6381 5.1237 23.9489 4.92254 24.291 4.78529C24.6332 4.64804 24.9999 4.5774 25.3702 4.5774C25.7406 4.5774 26.1073 4.64804 26.4494 4.78529C26.7915 4.92254 27.1024 5.1237 27.3641 5.37727C27.6261 5.63056 27.834 5.93135 27.9758 6.26244C28.1176 6.59352 28.1906 6.94841 28.1906 7.30682C28.1906 7.66522 28.1176 8.02012 27.9758 8.3512C27.834 8.68229 27.6261 8.98307 27.3641 9.23636L27.2795 9.31818C26.9547 9.63956 26.7368 10.0477 26.6539 10.4901C26.571 10.9325 26.627 11.3887 26.8145 11.8V11.9091C26.9932 12.3124 27.2898 12.6564 27.6678 12.8987C28.0458 13.141 28.4888 13.271 28.9423 13.2727H29.1818C29.9292 13.2727 30.6461 13.5601 31.1746 14.0715C31.7031 14.583 32 15.2767 32 16C32 16.7233 31.7031 17.417 31.1746 17.9285C30.6461 18.4399 29.9292 18.7273 29.1818 18.7273H29.055C28.6016 18.729 28.1586 18.859 27.7805 19.1013C27.4025 19.3436 27.1059 19.6876 26.9273 20.0909Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">
                  Brand Strategy Accelerator
                </span>
                <span className="btn btn-clean">
                  read more
                  <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </NavLink>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <NavLink
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
              to="/single-service"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={Packaging} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 10C19.0681 10 21.15 7.98528 21.15 5.5C21.15 3.01472 19.0681 1 16.5 1C13.9319 1 11.85 3.01472 11.85 5.5C11.85 7.98528 13.9319 10 16.5 10ZM16.5 10V31M16.5 31C12.3891 31 8.44666 29.4196 5.53984 26.6066C2.63303 23.7936 1 19.9782 1 16H5.65M16.5 31C20.6109 31 24.5533 29.4196 27.4602 26.6066C30.367 23.7936 32 19.9782 32 16H27.35"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">
                  Packaging and Brand Identity
                </span>
                <span className="btn btn-clean">
                  read more
                  <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </NavLink>
          </Col>
          <Col sm={6} lg={5} xl={3} className="col-12">
            <NavLink
              className="card card-service card-image-xl card-hover-zoom card-bg-show text-white"
              to="/single-service"
            >
              <span className="card-img" data-aos="fade-up">
                <img src={ContentProduction} alt="" />
                <span
                  className="background-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%)",
                  }}
                ></span>
              </span>
              <span className="card-img-overlay">
                <span className="card-icon">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7.44444C17 5.73527 16.3257 4.0961 15.1255 2.88753C13.9253 1.67897 12.2974 1 10.6 1H1V25.1667H12.2C13.473 25.1667 14.6939 25.6759 15.5941 26.5823C16.4943 27.4887 17 28.7181 17 30M17 7.44444V30M17 7.44444C17 5.73527 17.6743 4.0961 18.8745 2.88753C20.0747 1.67897 21.7026 1 23.4 1H33V25.1667H21.8C20.527 25.1667 19.3061 25.6759 18.4059 26.5823C17.5057 27.4887 17 28.7181 17 30"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="card-title h5">Content Production</span>
                <span className="btn btn-clean">
                  read more
                  <svg
                    className="icon-arrow icon-arrow-right"
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1L24 5L20 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 5L24 5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WhoWeAre;
