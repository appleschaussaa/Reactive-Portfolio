// import React, { useState } from "react";
import React from "react";
// import Navigation from "./Navigation";
import Navigation from "../Navigation/Navigation";

function Header() {
  // const [currentPage, pageChangeHandler] = useState("");
  return (
    <div className="container-fluid">
      <div className="inline-row">
        <h1>Roberts Portfolio</h1>
          <Navigation />
      </div>
    </div>
  );
}

export default Header;
