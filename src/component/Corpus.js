import React from "react";
import { CORPUS_IMAGE_URLS } from "./constants";

const Corpus = (props) => {
  const {
    corpusConfig: { corpus },
  } = props;
  return (
    <div className="corpusDiv">
      <img src={CORPUS_IMAGE_URLS[corpus]} alt="corpus" />
    </div>
  );
};

export default Corpus;
