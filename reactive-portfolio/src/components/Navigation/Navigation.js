import React, { useState } from "react";
import Aboutme from "../pages/Aboutme/Aboutme";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";

function Navigation() {
  const [currentPage, pageChangeHandler] = useState("Aboutme");

  const toggle = (page) => {
    pageChangeHandler(page);
    console.log(page);
  };

  const renderPage = () => {
    if (currentPage === "Aboutme") {
      return <Aboutme />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    // return null;
  };

  return (
    <>
      <nav className="navbar navbar-lg bg-light">
        <div className="nav-tab d-flex justify-content-end">
          <div className="nav-item m-3">
            <a
              href="#Aboutme"
              className={
                currentPage === "Aboutme" ? "nav-link active" : "nav-link"
              }
              onClick={() => toggle("Aboutme")}
            >
              About Me
            </a>
          </div>
          <div className="nav-item m-3">
            <a
              href="#Portfolio"
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              onClick={() => toggle("Portfolio")}
            >
              Portfolio
            </a>
          </div>
          <div className="nav-item m-3">
            <a
              href="#Contact"
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              onClick={() => toggle("Contact")}
            >
              Contact
            </a>
          </div>
          <div className="nav-item m-3">
            <a
              href="#Resume"
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              onClick={() => toggle("Resume")}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">{renderPage()}</div>
    </>
  );
}

export default Navigation;
