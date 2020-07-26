import React from "react";
import { CORPUS, CORPUS_IMAGE_URLS, CORPUS_TITLES } from "./constants";

const CorpusConfiger = (props) => {
  const corpuses = Object.values(CORPUS);
  const { changeCorpusConfig } = props;

  return (
    <div className="gripItems">
      {corpuses.map((corpus) => (
        <div
          key={CORPUS_TITLES[corpus]}
          className="gripItem"
          onClick={() => changeCorpusConfig(corpus)}
        >
          <p>{CORPUS_TITLES[corpus]}</p>
          <img src={CORPUS_IMAGE_URLS[corpus]} alt="corpus" />
        </div>
      ))}
    </div>
  );
};

export default CorpusConfiger;
