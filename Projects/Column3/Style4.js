import React, { useEffect, useState } from "react";
import { Container, NavLink } from "reactstrap";
import Navbar from "../../../Layouts/CommonLayouts/Navbar3";
import Footer from "../../../Layouts/CommonLayouts/Footer2";
import { NavLink as RouterLink } from "react-router-dom";

//Images
import Package from "../../../assets/images/portfolio/app-photography-740-540.jpg";
import Creative from "../../../assets/images/portfolio/identity-design-740-540.jpg";
import AppDesign from "../../../assets/images/portfolio/package-design-740-540.jpg";
import Identity from "../../../assets/images/portfolio/creative-branding-740-540.jpg";
import BoxedWater from "../../../assets/images/portfolio/gobe-mockup-740-540.jpg";
import Mobile from "../../../assets/images/portfolio/boxed-water-740-540.jpg";
import FunnyDog from "../../../assets/images/portfolio/app-design-740-540.jpg";
import Socks from "../../../assets/images/portfolio/creative-socks-740-540.jpg";
import Design from "../../../assets/images/portfolio/video-tutorial-740-540.jpg";

const Data = [
  {
    id: 1,
    img: AppDesign,
    category: ["all", "branding"],
    title: "App Photography",
    subtitle: "branding",
    size: "md",
    path: "/portfolio-single-style-5",
  },
  {
    id: 2,
    img: Creative,
    category: ["all", "marketing"],
    title: "Identity Design",
    subtitle: "marketing",
    size: "lg",
    path: "/portfolio-single-style-2",
  },
  {
    id: 3,
    img: Package,
    category: ["all", "branding"],
    title: "Package Design",
    subtitle: "branding",
    size: "md",
    path: "/portfolio-single-style-3",
  },
  {
    id: 4,
    img: Mobile,
    category: ["all", "photography"],
    title: "Creative Branding",
    subtitle: "photography",
    size: "lgbranding",
    path: "/portfolio-single-style-5",
  },
  {
    id: 5,
    img: BoxedWater,
    category: ["all", "design"],
    title: "Boxed Water",
    subtitle: "design",
    size: "md",
    path: "/portfolio-single-style-2",
  },
  {
    id: 6,
    img: Identity,
    category: ["all", "branding"],
    title: "Gobe Mockup",
    subtitle: "branding",
    size: "lg",
    path: "/portfolio-single-style-6",
  },
  {
    id: 7,
    img: FunnyDog,
    category: ["all", "marketing"],
    title: "App Design",
    subtitle: "marketing",
    size: "md",
    path: "/portfolio-single-style-5",
  },
  {
    id: 8,
    img: Socks,
    category: ["all", "branding"],
    title: "Creative Socks",
    subtitle: "branding",
    size: "lg",
    path: "/portfolio-single-style-2",
  },
  {
    id: 9,
    img: Design,
    category: ["all", "marketing"],
    title: "Video Tutorial",
    subtitle: "marketing",
    size: "md",
    path: "/portfolio-single-style-4",
  },
];

const Style4 = () => {
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
        <div className="isotope mt-130">
          <Container>
            <ul
              className="nav justify-content-center isotope-options mb-60"
              data-show-duration="500"
            >
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
          </Container>
          <div className="pt-30" data-show-duration="800">
            <div className="row isotope-grid">
              {projects.map((item, key) =>
                item.filtered === true ? (
                  <div
                    key={key}
                    className="col-12 col-sm-6 col-md-4 isotope-item"
                    data-aos="fade-up"
                  >
                    <RouterLink
                      className={
                        "card card-portfolio card-overlay card-hover-appearance text-center text-white card-image-" +
                        item.size
                      }
                      to={item.path}
                    >
                      <span className="card-img">
                        <img src={item.img} alt="" />
                        <span
                          className="background-color"
                          style={{ backgroundColor: "#0e0e0e" }}
                        ></span>
                      </span>
                      <span className="card-img-overlay">
                        <span className="card-title h4">{item.title} </span>
                        <span className="card-category subtitle">
                          {item.subtitle}
                        </span>
                      </span>
                    </RouterLink>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="text-center mt-100 mb-160">
            <RouterLink to="/#" className="btn btn-circle btn-light btn-lg">
              more
            </RouterLink>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Style4;
