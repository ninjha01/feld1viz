import React, { useState, useEffect, useRef } from "react";
import { AtomSel } from "./3DmolTypes";
import { Col, Button } from "react-bootstrap";

type Residue = AtomSel;

interface Variant {
  id: number;
  indices: number[];
  stats: string[];
  variant_type: "domestic" | "exotic";
  correlated_ids: number[];
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
  const [correlated, setCorrelated] = useState<number[] | undefined>(undefined);
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
    const modalStyle = {
      backgroundColor: "#6c757d",
      color: "#fff",
      borderRadius: 12,
      padding: 8,
      margin: 16,
      fontSize: 16,
      textAlign: "left" as "left",
    };
    if (modalText) {
      return (
        <div style={modalStyle} className={"FadeIn"}>
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
        if (sequence && v) {
          const corVars: number[] = v.correlated_ids
            .map((i) => sequence.variants.find((x) => x.id == i)!.indices)
            .flat();
          setCorrelated(corVars);
        } else {
          setCorrelated(undefined);
        }
        /* props.clickCallback(r); */
        if (v) {
          setModalText(v.stats);
        } else {
          setModalText(null);
        }
      };
    };

    const getColors = (
      r: Residue,
      variants: Variant[],
      correlatedIds: number[]
    ) => {
      if (correlatedIds.includes(r.resi)) {
        return { primaryColor: "blue", secondaryColor: "blue" };
      }
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
      const correlatedIds = correlated ? correlated : [];
      const { primaryColor, secondaryColor } = getColors(
        r,
        variants,
        correlatedIds
      );
      const relevantVariant = variants.values().next().value; // use first variant
      return (
        <span
          style={{
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: 32,
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
          maxWidth: "100vw",
          margin: 16,
          textAlign: "left",
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
        borderRadius: 12,
        maxWidth: "100vw",
      }}
    >
      <h3>{props.title}</h3>
      {clickableSequence(props.sequence)}
      {modal()}
    </div>
  );
};
