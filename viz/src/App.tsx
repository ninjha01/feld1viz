import React from "react";
import "./App.css";
import { StructureViz } from "./components/StructureViz";

const SequenceViz = () => {
  return (
    <div>
      <h1>Sequence</h1>
    </div>
  );
};

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
