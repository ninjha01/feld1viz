import React from "react";
import "./App.css";

import { StructureViz } from "./components/StructureViz";
import { SequenceViz } from "./components/SequenceViz";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Fel d 1 Viz</h1>
        <StructureViz pdb={"1PUO"} />
        <SequenceViz />
      </header>
    </div>
  );
};

export default App;
