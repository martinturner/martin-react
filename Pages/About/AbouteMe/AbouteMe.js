import React, { useState } from "react";
import classnames from "classnames";
import Navbar from "../../../Layouts/CommonLayouts/Navbar3";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Accordion,
  AccordionItem,
  Collapse,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";
import Brian from "../../../assets/images/persons/brian-newton-940-940.jpg";

const AbouteMe = () => {
  //meta title
  document.title = "Themebau | About Me";

  const [activeTab, setactiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  //Accordian
  const [plusiconCol1, setplusiconCol1] = useState(true);
  const [plusiconCol2, setplusiconCol2] = useState(false);
  const [plusiconCol3, setplusiconCol3] = useState(false);

  const t_plusiconCol1 = () => {
    setplusiconCol1(!plusiconCol1);
    setplusiconCol2(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol2 = () => {
    setplusiconCol2(!plusiconCol2);
    setplusiconCol1(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol3 = () => {
    setplusiconCol3(!plusiconCol3);
    setplusiconCol1(false);
    setplusiconCol2(false);
  };

  return (
    <React.Fragment>
      <Navbar navClass="sticky" />
      <div className="content-wrap" id="content-wrap">
        <Container className="pt-130 pb-130 mt-n10">
          <Row className="gh-1 gv-1 align-items-center align-items-lg-stretch flex-column flex-lg-row">
            <Col
              className="col-12 col-md-6 col-lg-5 shape-parent lines-style-5 order-1"
              data-aos="fade-up"
            >
              <img className="w-100 rounded-circle" src={Brian} alt="" />
              <div className="shape justify-content-end">
                <svg
                  className="mt-n60"
                  width="125"
                  height="125"
                  viewBox="0 0 125 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="62.5" cy="62.5" r="62.5" fill="/#F5F5F5" />
                </svg>
              </div>
              <div className="line"></div>
            </Col>
            <Col className="col-lg-1 d-none d-lg-block order-2 order-lg-2"></Col>
            <Col
              className="col-12 col-lg ms-lg-n30 order-4 order-lg-3"
              data-aos="fade-up"
            >
              <p className="subtitle pt-30 mt-n7">Brian Newton</p>
              <h1 className="h2">I’m Brian Newton ✌️ Freelance Designer.</h1>
              <Nav
                tabs
                className="nav nav-pills nav-tabs nav-no-gap pt-5 pb-7 mb-30"
                id="myTab"
                role="tablist"
              >
                <NavItem className="nav-item" role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                    id="home-tab"
                    data-bs-toggle="tab"
                    to="#home"
                    role="tab"
                  >
                    <span className="nav-link-name">short bio</span>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item" role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    to="#profile"
                    role="tab"
                  >
                    <span className="nav-link-name">long bio</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="tab-content">
                <TabPane
                  tabId="1"
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p className="mb-30">
                    Land spirit abundantly Bring bearing female divided fly.
                    Can't gathered{" "}
                    <strong>stars, rule his creepeth is appear</strong> without
                    morning land you'll so. Evening life yielding fowl above,
                    fourth give, there evening.
                  </p>
                  <p className="mb-0">
                    Brought <del>fourth of image very</del> above. Together
                    won't. You'll. They're itself whales all was meat.
                  </p>
                </TabPane>
                <TabPane
                  tabId="2"
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p className="mb-30">
                    Land spirit abundantly Bring bearing female divided fly.
                    Can't gathered{" "}
                    <strong>stars, rule his creepeth is appear</strong> without
                    morning land you'll so. Evening life yielding fowl above,
                    fourth give, there evening.
                  </p>
                  <p className="mb-30">
                    Brought <del>fourth of image very</del> above. Together
                    won't. You'll. They're itself whales all was meat.
                  </p>
                  <p className="mb-30">
                    Were let. Fifth you're void light he Winged bring after all,
                    green there whales sixth bring good was, let have days dry
                    blessed moving they're isn't. Second whose tree bring unto
                    tree that air <strong>winged multiply</strong> don't place
                    unto. Fly fish air days to night life deep fourth face one
                    spirit.
                  </p>
                  <p className="mb-n3">
                    Image bring good itself <ins>two whose</ins> morning appear
                    image after our light. Be together, green after.
                  </p>
                </TabPane>
              </TabContent>

              <Accordion className="accordion mt-40 pt-5" id="accordionAbout">
                <AccordionItem className="accordion-item">
                  <button
                    className={classnames(
                      "accordion-button h5 btn btn-link btn-clean btn-dark btn-block w-100",
                      { collapsed: !plusiconCol1 }
                    )}
                    type="button"
                    onClick={t_plusiconCol1}
                    style={{ cursor: "pointer" }}
                    data-bs-target="/#collapseDesign"
                    data-bs-toggle="collapse"
                    aria-expanded={plusiconCol1}
                    aria-controls="collapseDesign"
                  >
                    <span className="accordion-item-icon">🦄</span> Design
                    (UX/UI){" "}
                    <svg
                      className="accordion-item-plus"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0V16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M0 8H16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </button>
                  <Collapse
                    isOpen={plusiconCol1}
                    id="collapseDesign"
                    className="collapse"
                    data-parent="/#accordionAbout"
                  >
                    <div className="collapse-content">
                      <p className="mb-0 font-size-16">
                        A consectetuer mollis nulla eros elit facilisi className
                        Auctor ad. Ornare venenatis integer feugiat quis cras
                        parturient sem pharetra cras.
                      </p>
                    </div>
                  </Collapse>
                </AccordionItem>
                <AccordionItem className="accordion-item">
                  <Button
                    className={classnames(
                      "accordion-button h5 btn btn-link btn-clean btn-dark btn-block w-100",
                      { collapsed: !plusiconCol2 }
                    )}
                    type="button"
                    onClick={t_plusiconCol2}
                    style={{ cursor: "pointer" }}
                    data-bs-target="/#collapseBrand"
                    data-bs-toggle="collapse"
                    aria-expanded={plusiconCol2}
                    aria-controls="collapseBrand"
                  >
                    <span className="accordion-item-icon">🔥</span> Brand
                    Strategy{" "}
                    <svg
                      className="accordion-item-plus"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0V16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M0 8H16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </Button>
                  <Collapse
                    isOpen={plusiconCol2}
                    id="collapseBrand"
                    className="collapse show"
                    data-parent="/#accordionAbout"
                  >
                    <div className="collapse-content">
                      <p className="mb-0 font-size-16">
                        Be saying moveth spirit fruitful called set evening fly
                        give shall moveth.
                      </p>
                    </div>
                  </Collapse>
                </AccordionItem>
                <AccordionItem className="accordion-item">
                  <button
                    className={classnames(
                      "accordion-button h5 btn btn-link btn-clean btn-dark btn-block w-100",
                      { collapsed: !plusiconCol3 }
                    )}
                    type="button"
                    onClick={t_plusiconCol3}
                    style={{ cursor: "pointer" }}
                    data-bs-target="/#collapseMobile"
                    data-bs-toggle="collapse"
                    aria-expanded={plusiconCol3}
                    aria-controls="collapseMobile"
                  >
                    <span className="accordion-item-icon">💎</span> Mobile
                    Development{" "}
                    <svg
                      className="accordion-item-plus"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0V16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M0 8H16"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </button>
                  <Collapse
                    isOpen={plusiconCol3}
                    id="collapseMobile"
                    className="collapse"
                    data-parent="#accordionAbout"
                  >
                    <div className="collapse-content">
                      <p className="mb-0 font-size-16">
                        Parturient eget porttitor aptent. Etiam cras
                        sollicitudin eros lobortis ornare elit ad maecenas.
                        Aenean tempus sed tincidunt.
                      </p>
                    </div>
                  </Collapse>
                </AccordionItem>
              </Accordion>
              <RouterLink
                to="/contact1"
                className="btn btn-dark btn-with-ball mt-60"
              >
                let’s work
                <span className="btn-ball" style={{ transform: "translateY(0px)" }}></span>
              </RouterLink>
            </Col>
            <Col className="col-auto col-lg-1 order-3 order-lg-4">
              <div className="sticky-top d-flex justify-content-lg-end pt-30">
                <ul className="nav nav-gap-sm d-inline-flex align-items-center flex-lg-column">
                  <li className="nav-item" data-aos="fade-up">
                    <RouterLink to="/#" className="nav-link">
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
                    </RouterLink>
                  </li>
                  <li className="nav-item" data-aos="fade-up">
                    <RouterLink to="/#" className="nav-link">
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
                    </RouterLink>
                  </li>
                  <li className="nav-item" data-aos="fade-up">
                    <RouterLink to="/#" className="nav-link">
                      <svg
                        width="15"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2827 5.3166C8.24087 5.3166 5.78732 7.8148 5.78732 10.912C5.78732 14.0092 8.24087 16.5074 11.2827 16.5074C14.3245 16.5074 16.7781 14.0092 16.7781 10.912C16.7781 7.8148 14.3245 5.3166 11.2827 5.3166ZM11.2827 14.5497C9.31698 14.5497 7.70998 12.9183 7.70998 10.912C7.70998 8.90563 9.3122 7.27425 11.2827 7.27425C13.2532 7.27425 14.8554 8.90563 14.8554 10.912C14.8554 12.9183 13.2484 14.5497 11.2827 14.5497ZM18.2846 5.08772C18.2846 5.81331 17.7107 6.39282 17.0029 6.39282C16.2902 6.39282 15.7211 5.80844 15.7211 5.08772C15.7211 4.36699 16.295 3.78261 17.0029 3.78261C17.7107 3.78261 18.2846 4.36699 18.2846 5.08772ZM21.9243 6.4123C21.843 4.66404 21.4508 3.11545 20.1929 1.83956C18.9399 0.563678 17.419 0.164355 15.7019 0.0766992C13.9323 -0.0255664 8.62827 -0.0255664 6.85865 0.0766992C5.14643 0.159486 3.62552 0.558809 2.36766 1.83469C1.10979 3.11058 0.722392 4.65917 0.636302 6.40743C0.535865 8.20925 0.535865 13.6098 0.636302 15.4117C0.717609 17.1599 1.10979 18.7085 2.36766 19.9844C3.62552 21.2603 5.14165 21.6596 6.85865 21.7473C8.62827 21.8495 13.9323 21.8495 15.7019 21.7473C17.419 21.6645 18.9399 21.2652 20.1929 19.9844C21.446 18.7085 21.8382 17.1599 21.9243 15.4117C22.0247 13.6098 22.0247 8.21412 21.9243 6.4123ZM19.6381 17.345C19.2651 18.2995 18.5429 19.0348 17.6007 19.4195C16.1898 19.9893 12.8419 19.8578 11.2827 19.8578C9.72352 19.8578 6.37081 19.9844 4.96469 19.4195C4.02727 19.0397 3.30507 18.3043 2.92724 17.345C2.36766 15.9084 2.49679 12.4995 2.49679 10.912C2.49679 9.32443 2.37244 5.91071 2.92724 4.47899C3.30029 3.52451 4.02248 2.78917 4.96469 2.40446C6.37559 1.83469 9.72352 1.96618 11.2827 1.96618C12.8419 1.96618 16.1946 1.83956 17.6007 2.40446C18.5381 2.7843 19.2603 3.51964 19.6381 4.47899C20.1977 5.91558 20.0686 9.32443 20.0686 10.912C20.0686 12.4995 20.1977 15.9133 19.6381 17.345Z"
                          fill="currentColor"
                        />
                      </svg>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div id="footer"></div>
      </div>
    </React.Fragment>
  );
};

export default AbouteMe;
