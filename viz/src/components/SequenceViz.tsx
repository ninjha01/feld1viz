import React, { useState, useEffect } from "react";
import { AtomSel } from "./3DmolTypes";

type Residue = AtomSel;

interface Region {
  indices: number[];
  residues: Residue[];
}

interface Variant {
  region: Region;
  stats: string[];
  variant_type: "domestic" | "exotic";
}

export interface Sequence {
  residues: Residue[];
  variants: Variant[];
  conservedRegions: Region[];
}

export const SequenceViz = (props: {
  title: string;
  sequence: Sequence;
  clickCallback: (r: Residue) => void;
  clicked: Residue | null;
}) => {
  const [selectedResidue, setSelectedResiude] = useState<Residue | null>(null);

  useEffect(() => {
    if (props.clicked) {
      setSelectedResiude(props.clicked);
      console.log(
        "in structure, You clicked residue ",
        props.clicked.resn,
        "at index",
        props.clicked.resi
      );
    }
  }, [props.clicked]);

  const clickableSequence = (sequence: Sequence) => {
    const genOnClick = (r: Residue) => {
      return () => {
        setSelectedResiude(r);
        console.log("You clicked residue", r.resn, "at index", r.resi);
        props.clickCallback(r);
      };
    };

    return (
      <div
        style={{
          wordWrap: "break-word",
          width: 600,
        }}
      >
        {sequence.residues.map((r) => (
          <span
            style={{
              cursor: "pointer",
              fontSize: 32,
              color: selectedResidue?.resi == r.resi ? "red" : "white",
            }}
            onClick={genOnClick(r)}
          >
            {r.resn}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style={{ borderColor: "white", borderStyle: "solid", borderWidth: 3 }}>
      <h3>{props.title}</h3>
      {clickableSequence(props.sequence)}
      <p> Clicked residue: {selectedResidue?.resn}</p>
      <p> Clicked index: {selectedResidue?.resi}</p>
    </div>
  );
};
