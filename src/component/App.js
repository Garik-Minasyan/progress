import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BagMaker from "./BagMaker";
import NavBar from "./NavBar";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <BagMaker />
      </Router>
    </div>
  );
};

export default App;
