import React from "react";

// import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Navigation from "./components/Navigation";
// import Aboutme from "./components/pages/Aboutme";
// import Contact from "./components/pages/Contact";
// import Resume from "./components/pages/Resume";
// import PageDisplay from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="container-fluid">
      <Header
      />
      {/* <PageDisplay /> */}
      <Footer />

    </div>
  );
}

export default App;
