import React, { useState, useEffect } from "react";
import { AtomSel } from "./3DmolTypes";

type Residue = AtomSel;

interface Variant {
  id: number;
  indices: number[];
  stats: string[];
  variant_type: "domestic" | "exotic";
}

export interface Sequence {
  residues: Residue[];
  variants: Variant[];
  conservedRegions: number[];
}

export const SequenceViz = (props: {
  title: string;
  sequence: Sequence;
  clickCallback: (r: Residue) => void;
  clicked: Residue | null;
}) => {
  const [selectedResidue, setSelectedResidue] = useState<Residue | null>(null);
  const [modalText, setModalText] = useState<string[] | null>(null);
  /*
   *   useEffect(() => {
   *     if (props.clicked) {
   *       setSelectedResidue(props.clicked);
   *     }
   *   }, [props.clicked]);
   *  */
  const residueInRegion = (residue: Residue, region: number[]) => {
    return region.includes(residue.resi);
  };

  const getVariants = (residue: Residue): Variant[] => {
    const variants = new Set<Variant>();
    props.sequence.variants.forEach((v) => {
      if (v.indices.includes(residue.resi)) {
        variants.add(v);
      }
    });
    return Array.from(variants);
  };

  const modal = () => {
    if (modalText) {
      return (
        <div>
          <h3> Stats: </h3>
          <ul>
            {modalText.map((x) => {
              return <li>{x}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  const clickableSequence = (sequence: Sequence) => {
    const genOnClick = (r: Residue, v?: Variant) => {
      return () => {
        setSelectedResidue(r);
        /* props.clickCallback(r); */
        if (v) {
          setModalText(v.stats);
        } else {
          setModalText(null);
        }
      };
    };

    const getColors = (r: Residue, variants: Variant[]) => {
      const isSelected = selectedResidue?.resi === r.resi;
      let primaryColor = isSelected ? "red" : "white";
      let secondaryColor = isSelected ? "red" : "white";
      const variant_types = variants.map((v) => v.variant_type);
      if (!isSelected) {
        if (variant_types.includes("domestic")) {
          secondaryColor = "green";
        }
        if (variant_types.includes("exotic")) {
          secondaryColor = "orange";
        }
        if (
          variant_types.includes("domestic") &&
          variant_types.includes("exotic")
        ) {
          primaryColor = "green";
          secondaryColor = "orange";
        }
      }
      return { primaryColor, secondaryColor };
    };

    const renderResidue = (r: Residue) => {
      const variants = getVariants(r);
      const { primaryColor, secondaryColor } = getColors(r, variants);
      const relevantVariant = variants.values().next().value; // use first variant
      return (
        <span
          style={{
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: 32,
            textDecoration: "",
            background: `-webkit-linear-gradient(${primaryColor}, ${secondaryColor})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          key={r.resi + primaryColor}
          onClick={genOnClick(r, relevantVariant)}
        >
          {r.resn}
        </span>
      );
    };

    return (
      <div
        style={{
          wordWrap: "break-word",
          maxWidth: 800,
        }}
      >
        {sequence.residues.map((r) => renderResidue(r))}
      </div>
    );
  };

  return (
    <div
      style={{
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 3,
      }}
    >
      <h3>{props.title}</h3>
      {clickableSequence(props.sequence)}
      {modal()}
    </div>
  );
};
