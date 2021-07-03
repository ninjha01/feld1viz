import { useState, useEffect, useRef } from "react";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import { AtomSel, Viewer } from "./3DmolTypes";
import { Variant, Residue, Sequence } from "./SequenceViz";

import { colors } from "../colors";

type style = "ribbon" | "surface";

export const StructureViz = (props: {
  pdb: string;
  pdb_sequence: Sequence;
  clicked: Residue | null;
  variants: Variant[];
  seq1VarType: "domestic" | "exotic";
  seq2VarType: "domestic" | "exotic";
}) => {
  const [style, setStyle] = useState<style>("ribbon");
  const [previousLabels, setPreviousLabels] = useState<any[]>([]);
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [clickedSel, setClickedAtom] = useState<AtomSel[] | null>(null);

  const structureId = useRef("structureId");

  const colorByStructure = (atom: Residue) => {
    let color = colors.dark_grey;
    if (atom.resi > 0 && atom.resi <= 70) {
      color = colors.light_grey;
    } else if (atom.resi > 71 && atom.resi <= 146) {
      color = colors.light_pink;
    } else {
      console.log("Unexpected atom index", atom);
    }

    return color;
  };

  const ribbonStyle = { cartoon: { colorfunc: colorByStructure } };
  const surfaceStyle = { sphere: { radius: 1, colorfunc: colorByStructure } };

  useEffect(
    function initializeViewer() {
      const config = { backgroundColor: colors.background };
      const _viewer = $3Dmol.createViewer(
        structureId.current,
        config
      ) as Viewer;
      if (_viewer != null) {
        setViewer(_viewer);
      } else {
        alert("Failed to initialize viewer");
      }
      setStyle("ribbon");
    },
    [structureId]
  );

  useEffect(
    function findClickedAtomByIdx() {
      if (props.clicked && props.clicked.structureIndex) {
        const matchingAtoms = viewer?.selectedAtoms({
          resi: props.clicked.structureIndex,
          resn: AACodeMap.get(props.clicked.resn)!,
          chain: props.clicked.chain,
        });
        if (matchingAtoms.length > 0) {
          debugger;
          setClickedAtom(matchingAtoms);
        } else {
          console.log("couldn't find matching atoms");
        }
      }
    },
    [viewer, props.clicked]
  );

  useEffect(
    function zoomToSelection() {
      if (viewer !== null && clickedSel != null) {
        if (previousLabels) {
          viewer.removeAllLabels();
          viewer.render();
        }
        const labels = [
          {
            title: clickedSel[0].resn,
            style: {
              position: {
                x: clickedSel[0].x,
                y: clickedSel[0].y,
                z: clickedSel[0].z,
              },
              backgroundColor: colors.red,
              backgroundOpacity: 1,
            },
          },
        ];
        setPreviousLabels(labels.map((l) => viewer.addLabel(l.title, l.style)));
        viewer.render();
      }
    },
    [clickedSel, viewer]
  );

  useEffect(() => {
    const downloadAndViewPdb = async () => {
      if (viewer != null) {
        await $3Dmol.download(`pdb:${props.pdb}`, viewer, {});
        viewer.setClickable(
          {},
          true,
          (atom: AtomSel, _: any, __: any, ___: any) => {
            setClickedAtom([atom]);
          }
        );
        viewerApplyStyle();
      }
    };

    downloadAndViewPdb();
  }, [viewer, props.pdb]);

  const toggleSurfaceRibbon = () => {
    const next = style === "surface" ? "ribbon" : "surface";
    setStyle(next);
  };

  function viewerApplyStyle() {
    if (viewer !== null) {
      if (style === "surface") {
        viewer.setStyle({}, surfaceStyle);
      } else if (style === "ribbon") {
        viewer.setStyle({}, ribbonStyle);
      }
      props.variants
        .filter((v) => {
          return (
            (v.chain == "A" && v.variant_type == props.seq1VarType) ||
            (v.chain == "B" && v.variant_type == props.seq2VarType)
          );
        })
        .forEach((v) => {
          const res = props.pdb_sequence.residues[v.indices[0]];
          let variantStyle = null;
          if (style === "surface") {
            variantStyle = { sphere: { radius: 1, colorfunc: () => v.color } };
          }
          if (style === "ribbon") {
            variantStyle = { cartoon: { colorfunc: () => v.color } };
          }
          if (!res) {
            debugger;
          }
          viewer.addStyle(
            {
              resi: res.resi,
              resn: AACodeMap.get(res.resn)!,
              chain: v.chain,
            },
            variantStyle
          );
        });
      viewer.render();
    }
  }
  useEffect(viewerApplyStyle, [
    viewer,
    style,
    props.seq1VarType,
    props.seq2VarType,
  ]);

  return (
    <div
      style={{
        borderColor: colors.black,
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        padding: 8,
        position: "relative",
        margin: 16,
      }}
    >
      <p style={{ textAlign: "center" }}>Fel d 1</p>
      <div
        id={structureId.current}
        style={{
          minWidth: "25vw",
          minHeight: "25vw",
          position: "relative",
          alignSelf: "center",
        }}
      />
      <ButtonGroup toggle size="sm" style={{ margin: 8 }}>
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"surface"}
          checked={style === "surface"}
          onChange={(_) => {
            toggleSurfaceRibbon();
          }}
        >
          Surface
        </ToggleButton>
        <ToggleButton
          type="radio"
          variant="outline-info"
          name="radio"
          value={"ribbon"}
          checked={style === "ribbon"}
          onChange={(_) => {
            toggleSurfaceRibbon();
          }}
        >
          Ribbon
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

const AACodeMap = new Map([
  ["G", "GLY"],
  ["P", "PRO"],
  ["A", "ALA"],
  ["V", "VAL"],
  ["L", "LEU"],
  ["I", "ILE"],
  ["M", "MET"],
  ["C", "CYS"],
  ["F", "PHE"],
  ["Y", "TYR"],
  ["W", "TRP"],
  ["H", "HIS"],
  ["K", "LYS"],
  ["R", "ARG"],
  ["Q", "GLN"],
  ["N", "ASN"],
  ["E", "GLU"],
  ["D", "ASP"],
  ["S", "SER"],
  ["T", "THR"],
]);
