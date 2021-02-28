import React, { useState, useEffect } from "react";
import "./App.css";

import { StructureViz } from "./components/StructureViz";
import { SequenceViz, Sequence } from "./components/SequenceViz";
import { AtomSel } from "./components/3DmolTypes";
import { chain1_sequence, chain2_sequence } from "./sequence";

const App = () => {
  const [clickedSelection1, setClickedSelection1] = useState<AtomSel | null>(
    null
  );
  const [clickedSelection2, setClickedSelection2] = useState<AtomSel | null>(
    null
  );
  const [clickedToDisplay, setClickedToDisplay] = useState<AtomSel | null>(
    null
  );
  const atomClicked = (r: AtomSel) => {
    setClickedToDisplay(r);
    if (r.chain == "A") {
      setClickedSelection1(r);
      setClickedSelection2(null);
    } else {
      setClickedSelection1(null);
      setClickedSelection2(r);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <StructureViz
          pdb={"2EJN"}
          clickCallback={atomClicked}
          clicked={clickedToDisplay}
          chain1_sequence={chain1_sequence}
          chain2_sequence={chain2_sequence}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SequenceViz
            title={"Chain 1"}
            sequence={chain1_sequence}
            clickCallback={atomClicked}
            clicked={clickedSelection1}
          />
          <SequenceViz
            title={"Chain 2"}
            sequence={chain2_sequence}
            clickCallback={atomClicked}
            clicked={clickedSelection2}
          />
        </div>
      </header>
    </div>
  );
};

export default App;
