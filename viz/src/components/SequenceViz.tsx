import React, { useState } from "react";
import { AtomSel } from "./3DmolTypes";
import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { colors } from "../colors";

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

export interface cutSites {
  indices: number[];
}

export const SequenceViz = (props: {
  title: string;
  sequence: Sequence;
  clickCallback: (r: Residue) => void;
  clicked: Residue | null;
  cutsites: cutSites;
}) => {
  const [selectedResidue, setSelectedResidue] = useState<Residue | null>(null);
  const [modalText, setModalText] = useState<string[] | null>(null);
  const [correlated, setCorrelated] = useState<number[] | undefined>(undefined);
  const [variantType, setVariantType] = useState<"domestic" | "exotic">(
    "domestic"
  );
  const getVariants = (residue: Residue): Variant[] => {
    const variants = new Set<Variant>();
    props.sequence.variants.forEach((v) => {
      if (variantType === v.variant_type && v.indices.includes(residue.resi)) {
        variants.add(v);
      }
    });
    return Array.from(variants);
  };

  const modal = () => {
    const modalStyle = {
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      borderStyle: "dotted",
      color: colors.white,
      borderRadius: 12,
      padding: 8,
      margin: 16,
      fontSize: "calc(10px + 2vmin)",
      textAlign: "left" as "left",
    };
    if (modalText) {
      return (
        <div style={modalStyle} className={"FadeIn"}>
          <div style={{ textAlign: "center" }}>
            <h4>Variant Info</h4>
          </div>
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
            .map((i) => {
              const correlatedIndices = sequence.variants.find(
                (x) => x.id === i
              )?.indices;
              if (correlatedIndices) {
                return correlatedIndices;
              } else {
                console.log("Couldn't find correlated indices for", r, v);
                return [];
              }
            })
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

    const getTextColor = (
      r: Residue,
      variants: Variant[],
      correlatedIds: number[]
    ) => {
      if (correlatedIds.includes(r.resi)) {
        return colors.green;
      }
      const isSelected = selectedResidue?.resi === r.resi;
      let textColor = isSelected ? colors.red : colors.white;
      const variant_types = variants.map((v) => v.variant_type);
      if (!isSelected) {
        if (variant_types.includes("domestic")) {
          textColor = colors.blue;
        }
      }
      return textColor;
    };

    const renderResidue = (r: Residue) => {
      const variants = getVariants(r);
      const correlatedIds = correlated ? correlated : [];
      const textColor = getTextColor(r, variants, correlatedIds);
      const relevantVariant = variants.values().next().value; // use first variant
      return (
        <span
          style={{
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: "calc(10px + 2vmin)",
            background: `-webkit-linear-gradient(${textColor}, ${textColor})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: props.cutsites.indices.includes(r.resi)
              ? `underline dotted ${colors.orange}`
              : "initial",
          }}
          key={r.resi + textColor}
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
        borderColor: colors.white,
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 12,
        paddingTop: 8,
      }}
    >
      <h3>{props.title}</h3>
      <ButtonGroup toggle size="sm">
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"domestic"}
          checked={variantType === "domestic"}
          onChange={(_) => setVariantType("domestic")}
        >
          Domestic
        </ToggleButton>
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"exotic"}
          checked={variantType === "exotic"}
          onChange={(_) => setVariantType("exotic")}
        >
          Exotic
        </ToggleButton>
      </ButtonGroup>

      {clickableSequence(props.sequence)}
      {modal()}
    </div>
  );
};
