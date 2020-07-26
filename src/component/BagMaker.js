import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Grip from "./Grip";
import GripConfiger from "./GripConfiger";
import Corpus from "./Corpus";
import CorpusConfiger from "./CorpusConfiger";

import { DEFAULT_GRIP_CONFIG, DEFAULT_CORPUS_CONFIG } from "./constants";

const BagMaker = () => {
  const [gripConfig, setGripConfig] = useState(DEFAULT_GRIP_CONFIG);
  const [corpusConfig, setCorpusConfig] = useState(DEFAULT_CORPUS_CONFIG);

  const changeGripConfig = (property, value) => {
    setGripConfig({
      ...gripConfig,
      [property]: value,
    });
  };
  const changeCorpusConfig = (property, value) => {
    setCorpusConfig({
      ...corpusConfig,
      [property]: value,
    });
  };

  return (
    <div className="bagMaker">
      <Switch>
        <Route path="/" exact>
          <CorpusConfiger
            changeCorpusConfig={(value) => changeCorpusConfig("corpus", value)}
          />
        </Route>
        <Route path="/grip">
          <GripConfiger
            changeGripConfig={(value) => changeGripConfig("grip", value)}
          />
        </Route>
      </Switch>
      <div className="gripCorpus">
        <Grip gripConfig={gripConfig} />
        <Corpus corpusConfig={corpusConfig} />
      </div>
    </div>
  );
};

export default BagMaker;
