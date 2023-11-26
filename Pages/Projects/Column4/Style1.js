import React, { useEffect, useState } from "react";
import { Col, Container, NavLink, Row } from "reactstrap";
import Navbar from "../../../Layouts/CommonLayouts/Navbar3";
import Footer from "../../../Layouts/CommonLayouts/Footer2";
import { NavLink as RouterLink } from "react-router-dom";

//Images
import Package from "../../../assets/images/portfolio/funny-dog-540-540.jpg";
import Creative from "../../../assets/images/portfolio/sport-today-540-540.jpg";
import AppDesign from "../../../assets/images/portfolio/watch-design-540-540.jpg";
import Identity from "../../../assets/images/portfolio/identity-design-540-540.jpg";
import BoxedWater from "../../../assets/images/portfolio/package-design-540-540.jpg";
import Mobile from "../../../assets/images/portfolio/brand-design-540-540.jpg";
import FunnyDog from "../../../assets/images/portfolio/bag-design-540-540.jpg";
import Socks from "../../../assets/images/portfolio/app-design-540-540.jpg";
import Design from "../../../assets/images/portfolio/gobe-mockup-540-540.jpg";
import BagDesign from "../../../assets/images/portfolio/boxed-water-540-540.jpg";
import Breakfast from "../../../assets/images/portfolio/happy-moments-540-540.jpg";
import Watchdesign from "../../../assets/images/portfolio/creative-socks-540-540.jpg";

const Data = [
  {
    id: 1,
    img: AppDesign,
    category: ["all", "branding"],
    title: "Funny Dog",
    path: "/portfolio-single-style-4",
  },
  {
    id: 2,
    img: Creative,
    category: ["all", "marketing"],
    title: "Sport Today",
    path: "/portfolio-single-style-6",
  },
  {
    id: 3,
    img: Package,
    category: ["all", "branding"],
    title: "Watch Design",
    path: "/portfolio-single-style-1",
  },
  {
    id: 4,
    img: Mobile,
    category: ["all", "photography"],
    title: "Identity Design",
    path: "/portfolio-single-style-2",
  },
  {
    id: 5,
    img: BoxedWater,
    category: ["all", "design"],
    title: "Package Design",
    path: "/portfolio-single-style-3",
  },
  {
    id: 6,
    img: Identity,
    category: ["all", "branding"],
    title: "Brand Design",
    path: "/portfolio-single-style-4",
  },
  {
    id: 7,
    img: FunnyDog,
    category: ["all", "marketing"],
    title: "Bag Design",
    path: "/portfolio-single-style-1",
  },
  {
    id: 8,
    img: Socks,
    category: ["all", "branding"],
    title: "App Design",
    path: "/portfolio-single-style-5",
  },
  {
    id: 9,
    img: Design,
    category: ["all", "marketing"],
    title: "Gobe Mockup",
    path: "/portfolio-single-style-6",
  },
  {
    id: 10,
    img: BagDesign,
    category: ["all", "branding"],
    title: "Boxed Water",
    path: "/portfolio-single-style-2",
  },
  {
    id: 11,
    img: Breakfast,
    category: ["all", "branding"],
    title: "Happy Moments",
    path: "/portfolio-single-style-2",
  },
  {
    id: 12,
    img: Watchdesign,
    category: ["all", "design"],
    title: "Happy Moments",
    path: "/portfolio-single-style-2",
  },
];

const Style1 = () => {
  //meta title
  document.title = "Themebau | An Award-winning digital Studio";

  const [filter, setFilter] = useState();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Data);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = Data.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  useEffect(() => setFilter('all'), [])

  return (
    <React.Fragment>
      <Navbar navClass="navbar-fixed" />
      <div className="content-wrap" id="content-wrap">
        <Container className="isotope">
          <h1 className="mt-160 py-10 mb-100 text-center" data-aos="fade-up">
            Our projects
          </h1>
          <ul
            className="nav justify-content-center isotope-options mb-60"
            data-show-duration="500"
          >
            <li className="nav-item" data-aos="fade">
              <NavLink
                href="#"
                active={filter === "all"}
                onClick={() => setFilter("all")}
                data-filter="all"
                className="nav-link"
              >
                <div className="nav-link-name">all projects</div>
              </NavLink>
            </li>
            <li className="nav-item" data-aos="fade">
              <NavLink
                href="#"
                active={filter === "branding"}
                onClick={() => setFilter("branding")}
                data-filter="branding"
                className="nav-link"
              >
                <div className="nav-link-name">branding</div>
              </NavLink>
            </li>
            <li className="nav-item" data-aos="fade">
              <NavLink
                href="#"
                active={filter === "design"}
                onClick={() => setFilter("design")}
                data-filter="design"
                className="nav-link"
              >
                <div className="nav-link-name">design</div>
              </NavLink>
            </li>
            <li className="nav-item" data-aos="fade">
              <NavLink
                href="#"
                active={filter === "photography"}
                onClick={() => setFilter("photography")}
                data-filter="photography"
                className="nav-link"
              >
                <div className="nav-link-name">photography</div>
              </NavLink>
            </li>
            <li className="nav-item" data-aos="fade">
              <NavLink
                href="#"
                active={filter === "marketing"}
                onClick={() => setFilter("marketing")}
                data-filter="marketing"
                className="nav-link"
              >
                <div className="nav-link-name">marketing</div>
              </NavLink>
            </li>
          </ul>
          <div className="pt-30" data-show-duration="800">
            <Row className="gh-1 gv-1 isotope-grid">
              {projects.map((item, key) =>
                item.filtered === true ? (
                  <Col
                    sm={6} md={4} lg={3}
                    key={key}
                    className="col-12 isotope-item"
                    data-aos="fade-up"
                    data-cursor-style="cursor-text"
                    data-cursor-text={item.title}
                  >
                    <RouterLink
                      className="card card-portfolio card-overlay card-image-lg card-hover-zoom text-center"
                      to={item.path}
                    >
                      <span className="card-img">
                        <img src={item.img} alt="" />
                      </span>
                    </RouterLink>
                  </Col>
                ) : (
                  ""
                )
              )}
            </Row>
          </div>
          <div className="text-center mt-100 mb-160">
            <RouterLink to="/#" className="btn btn-circle btn-light btn-lg">
              more
            </RouterLink>
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Style1;
