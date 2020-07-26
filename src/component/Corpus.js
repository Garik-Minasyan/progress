import React from "react";
import { CORPUS_IMAGE_URLS, CORPUS_TITLES } from "./constants";

const Corpus = (props) => {
  const {
    corpusConfig: { corpus },
  } = props;
  return (
    <div className="corpusDiv">
      <p>{CORPUS_TITLES[corpus]}</p>
      <img src={CORPUS_IMAGE_URLS[corpus]} alt="corpus" />
    </div>
  );
};

export default Corpus;
