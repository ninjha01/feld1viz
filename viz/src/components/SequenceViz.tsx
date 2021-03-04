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
  const [modalText, setModalText] = useState<string | null>(null);

  useEffect(() => {
    if (props.clicked) {
      setSelectedResiude(props.clicked);
    }
  }, [props.clicked]);

  const residueInRegion = (residue: Residue, region: Region) => {
    return region.indices.includes(residue.resi);
  };

  const residueIsConserved = (residue: Residue) => {
    return props.sequence.conservedRegions.some((region) =>
      residueInRegion(residue, region)
    );
  };

  const getVariants = (residue: Residue): Variant[] => {
    const variants = new Set<Variant>();
    props.sequence.variants.forEach((v) => {
      if (v.region.indices.includes(residue.resi)) {
        variants.add(v);
      }
    });
    return Array.from(variants);
  };

  const modal = () => <div>{modalText && modalText}</div>;

  const clickableSequence = (sequence: Sequence) => {
    const genOnClick = (r: Residue, v?: Variant) => {
      return () => {
        setSelectedResiude(r);
        props.clickCallback(r);
        if (v) {
          setModalText(v.stats.join("\n"));
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
      return { primaryColor, secondaryColor }
    }

    const renderResidue = (r: Residue) => {
      const variants = getVariants(r);
      const { primaryColor, secondaryColor } = getColors(r, variants)
      const textDecoration = residueIsConserved(r) ? "underline" : "";
      const relevantVariant = variants.values().next().value // use first variant
      return (
        <span
          style={{
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: 32,
            textDecoration: textDecoration,
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
    }

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
