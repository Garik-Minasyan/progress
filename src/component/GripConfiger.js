import React from "react";
import { GRIPS, GRIPS_IMAGE_URLS, GRIPS_TITLES } from "./constants";

const GripConfiger = (props) => {
  const grips = Object.values(GRIPS);
  const { changeGripConfig } = props;

  return (
    <div className="gripItems">
      {grips.map((grip) => (
        <div
          key={GRIPS_TITLES[grip]}
          className="gripItem"
          onClick={() => changeGripConfig(grip)}
        >
          <p>{GRIPS_TITLES[grip]}</p>
          <img src={GRIPS_IMAGE_URLS[grip]} alt="cofnig ripasd apsd" />
        </div>
      ))}
    </div>
  );
};

export default GripConfiger;
