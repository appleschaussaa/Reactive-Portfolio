import React, { useState } from "react";

import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
import Aboutme from "./components/pages/Aboutme";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";


function App() {
  const [currentPage, pageChangeHandler] = useState("Aboutme");

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
    return <Resume />;
  };

  // const pageChangeHandler = (page) => setCurrentPage(page);

  return (
    <div className="container text-center">
      <Header currentPage={currentPage} pageChangeHandler={pageChangeHandler}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
