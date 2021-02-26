import React, { useState, useEffect } from "react";
import "./App.css";

import { StructureViz } from "./components/StructureViz";
import { SequenceViz, Sequence } from "./components/SequenceViz";
import { AtomSel } from "./components/3DmolTypes";

const _sequence: Sequence = {
  residues: [
    { resn: "M", resi: 0, chain: "A" },
    { resn: "K", resi: 1, chain: "A" },
    { resn: "G", resi: 2, chain: "A" },
    { resn: "A", resi: 3, chain: "A" },
    { resn: "R", resi: 4, chain: "A" },
    { resn: "V", resi: 5, chain: "A" },
    { resn: "L", resi: 6, chain: "A" },
    { resn: "V", resi: 7, chain: "A" },
    { resn: "L", resi: 8, chain: "A" },
    { resn: "L", resi: 9, chain: "A" },
    { resn: "W", resi: 10, chain: "A" },
    { resn: "A", resi: 11, chain: "A" },
    { resn: "A", resi: 12, chain: "A" },
    { resn: "L", resi: 13, chain: "A" },
    { resn: "L", resi: 14, chain: "A" },
    { resn: "L", resi: 15, chain: "A" },
    { resn: "I", resi: 16, chain: "A" },
    { resn: "W", resi: 17, chain: "A" },
    { resn: "G", resi: 18, chain: "A" },
    { resn: "G", resi: 19, chain: "A" },
    { resn: "N", resi: 20, chain: "A" },
    { resn: "C", resi: 21, chain: "A" },
    { resn: "E", resi: 22, chain: "A" },
    { resn: "I", resi: 23, chain: "A" },
    { resn: "C", resi: 24, chain: "A" },
    { resn: "P", resi: 25, chain: "A" },
    { resn: "A", resi: 26, chain: "A" },
    { resn: "V", resi: 27, chain: "A" },
    { resn: "K", resi: 28, chain: "A" },
    { resn: "R", resi: 29, chain: "A" },
    { resn: "D", resi: 30, chain: "A" },
    { resn: "V", resi: 31, chain: "A" },
    { resn: "D", resi: 32, chain: "A" },
    { resn: "L", resi: 33, chain: "A" },
    { resn: "F", resi: 34, chain: "A" },
    { resn: "L", resi: 35, chain: "A" },
    { resn: "T", resi: 36, chain: "A" },
    { resn: "G", resi: 37, chain: "A" },
    { resn: "T", resi: 38, chain: "A" },
    { resn: "P", resi: 39, chain: "A" },
    { resn: "D", resi: 40, chain: "A" },
    { resn: "E", resi: 41, chain: "A" },
    { resn: "Y", resi: 42, chain: "A" },
    { resn: "V", resi: 43, chain: "A" },
    { resn: "E", resi: 44, chain: "A" },
    { resn: "Q", resi: 45, chain: "A" },
    { resn: "V", resi: 46, chain: "A" },
    { resn: "A", resi: 47, chain: "A" },
    { resn: "Q", resi: 48, chain: "A" },
    { resn: "Y", resi: 49, chain: "A" },
    { resn: "K", resi: 50, chain: "A" },
    { resn: "A", resi: 51, chain: "A" },
    { resn: "L", resi: 52, chain: "A" },
    { resn: "P", resi: 53, chain: "A" },
    { resn: "V", resi: 54, chain: "A" },
    { resn: "V", resi: 55, chain: "A" },
    { resn: "L", resi: 56, chain: "A" },
    { resn: "E", resi: 57, chain: "A" },
    { resn: "N", resi: 58, chain: "A" },
    { resn: "A", resi: 59, chain: "A" },
    { resn: "R", resi: 60, chain: "A" },
    { resn: "I", resi: 61, chain: "A" },
    { resn: "L", resi: 62, chain: "A" },
    { resn: "K", resi: 63, chain: "A" },
    { resn: "N", resi: 64, chain: "A" },
    { resn: "C", resi: 65, chain: "A" },
    { resn: "V", resi: 66, chain: "A" },
    { resn: "D", resi: 67, chain: "A" },
    { resn: "A", resi: 68, chain: "A" },
    { resn: "K", resi: 69, chain: "A" },
    { resn: "M", resi: 70, chain: "A" },
    { resn: "T", resi: 71, chain: "A" },
    { resn: "E", resi: 72, chain: "A" },
    { resn: "E", resi: 73, chain: "A" },
    { resn: "D", resi: 74, chain: "A" },
    { resn: "K", resi: 75, chain: "A" },
    { resn: "E", resi: 76, chain: "A" },
    { resn: "N", resi: 77, chain: "A" },
    { resn: "A", resi: 78, chain: "A" },
    { resn: "L", resi: 79, chain: "A" },
    { resn: "S", resi: 80, chain: "A" },
    { resn: "L", resi: 81, chain: "A" },
    { resn: "L", resi: 82, chain: "A" },
    { resn: "D", resi: 83, chain: "A" },
    { resn: "K", resi: 84, chain: "A" },
    { resn: "I", resi: 85, chain: "A" },
    { resn: "Y", resi: 86, chain: "A" },
    { resn: "T", resi: 87, chain: "A" },
    { resn: "S", resi: 88, chain: "A" },
    { resn: "P", resi: 89, chain: "A" },
    { resn: "L", resi: 90, chain: "A" },
  ],

  variants: [
    {
      region: {
        indices: [0, 1, 2, 3],
        residues: [
          { resi: 0, resn: "TYR", chain: "A" },
          { resi: 0, resn: "TYR", chain: "A" },
          { resi: 0, resn: "TYR", chain: "A" },
          { resi: 0, resn: "TYR", chain: "A" },
        ],
      },
      stats: ["stats"],
      variant_type: "domestic",
    },
  ],
  conservedRegions: [],
};

const App = () => {
  const [clickedSelection, setClickedSelection] = useState<AtomSel | null>(
    null
  );
  const atomClicked = (r: AtomSel) => {
    setClickedSelection(r);
  };

  return (
    <div className="App">
      <header className="App-header">
        <StructureViz
          pdb={"1PUO"}
          clickCallback={atomClicked}
          clicked={clickedSelection}
          sequence={_sequence}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SequenceViz
            title={"Chain 1"}
            sequence={_sequence}
            clickCallback={atomClicked}
            clicked={clickedSelection}
          />
          <SequenceViz
            title={"Chain 2"}
            sequence={_sequence}
            clickCallback={atomClicked}
            clicked={clickedSelection}
          />
        </div>
      </header>
    </div>
  );
};

export default App;
