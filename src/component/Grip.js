import React from "react";
import { GRIPS_IMAGE_URLS } from "./constants";

const Grip = (props) => {
  const {
    gripConfig: { grip },
  } = props;
  return (
    <div className="gripDiv">
      <img className="gripImg" src={GRIPS_IMAGE_URLS[grip]} alt="bag grip" />
    </div>
  );
};

export default Grip;
