import React from "react";
import { GRIPS_IMAGE_URLS, GRIPS_TITLES } from "./constants";

const Grip = (props) => {
  const {
    gripConfig: { grip },
  } = props;
  return (
    <div className="gripDiv">
      <p>{GRIPS_TITLES[grip]}</p>
      <img className="gripImg" src={GRIPS_IMAGE_URLS[grip]} alt="bag grip" />
    </div>
  );
};

export default Grip;
