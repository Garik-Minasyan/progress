import React from "react";
import { Link } from "react-router-dom";

import GripBar from "./GripBar";
import CorpusBar from "./CorpusBar";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link className="link" to="/">
        <CorpusBar />
      </Link>
      <Link className="link" to="/grip">
        <GripBar />
      </Link>
    </div>
  );
};

export default NavBar;
