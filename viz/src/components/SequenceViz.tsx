import React, { useState } from "react";
import { AtomSel } from "./3DmolTypes";
import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { colors } from "../colors";

export interface Residue {
  resi: number;
  resn: string;
  chain: string;
  structureIndex?: number;
}

export interface Variant {
  id: number;
  indices: number[];
  stats: string[];
  variant_type: "domestic" | "exotic";
  color: string;
  chain: "A" | "B";
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
  clickCallback: (a: Residue) => void;
  variantType: "domestic" | "exotic"
  setVariantType: (x: "domestic" | "exotic") => void;
}) => {
  const [selectedResidue, setSelectedResidue] = useState<Residue | null>(null);
  const [modalText, setModalText] = useState<string[] | null>(null);
  const getVariants = (residue: Residue): Variant[] => {
    const variants = new Set<Variant>();
    props.sequence.variants.forEach((v) => {
      if (props.variantType === v.variant_type && v.indices.includes(residue.resi)) {
        variants.add(v);
      }
    });
    return Array.from(variants);
  };

  const modal = () => {
    const modalStyle = {
      backgroundColor: colors.background,
      borderColor: colors.blue,
      borderStyle: "dotted",
      color: colors.black,
      borderRadius: 12,
      padding: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8,
      fontSize: "calc(10px + 0.5vmin)",
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
        console.log("called", r, v);
        setSelectedResidue(r);
        if (r.structureIndex) {
          props.clickCallback(r);
        }
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
    ) => {
      const isSelected = selectedResidue?.resi === r.resi;
      if (isSelected) {
        return colors.red;
      }
      if (variants.length == 1) {
        return variants[0].color;
      }
      if (variants.length > 1) {
        return colors.blue;
      }
      if (r.structureIndex) {
        return colors.black;
      }
      return colors.grey;
    };

    const renderResidue = (r: Residue) => {
      const variants = getVariants(r);
      const textColor = getTextColor(r, variants);
      const relevantVariant = variants.values().next().value; // use first variant
      return (
        <>
          <span
            style={{
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: "calc(10px + 2vmin)",
              background: `-webkit-linear-gradient(${textColor}, ${textColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: props.sequence.conservedRegions.includes(r.resi) && props.variantType == "domestic"
                ? `underline dotted ${colors.black}`
                : "initial",
              position: "relative",
              top: "-0.5em",
            }}
            key={r.resi + textColor}
            onClick={genOnClick(r, relevantVariant)}
          >
            {r.resn}
          </span>
          {(r.resi + 1) % 10 == 0 && (
            <span
              style={{
                fontSize: 10,
                position: "relative",
                height: 0,
                overflow: "visible",
                top: "0.5em",
                left: "-1em",
                zIndex: 1,
              }}
            >
              {r.resi + 1}
            </span>
          )}
        </>
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
        borderColor: colors.black,
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 12,
        paddingTop: 8,
      }}
    >
      <p style={{ textAlign: "center" }}>{props.title}</p>
      <ButtonGroup toggle size="sm">
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"domestic"}
          checked={props.variantType === "domestic"}
          onChange={(_: any) => {
            setSelectedResidue(null);
            props.setVariantType("domestic");
          }}
        >
          Domestic
        </ToggleButton>
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"exotic"}
          checked={props.variantType === "exotic"}
          onChange={(_: any) => {
            setSelectedResidue(null);
            props.setVariantType("exotic");
          }}
        >
          Exotic
        </ToggleButton>
      </ButtonGroup>

      {clickableSequence(props.sequence)}
      {modal()}
    </div>
  );
};
