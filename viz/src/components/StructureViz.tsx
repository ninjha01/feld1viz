import { useState, useEffect, useRef } from "react";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import { AtomSel, Viewer } from "./3DmolTypes";
import { Residue, Sequence } from "./SequenceViz";
import { Button } from "react-bootstrap";
import { colors } from "../colors";

type style = "ribbon" | "surface";
const ribbonStyle = { cartoon: { colorscheme: "shapely" } };
const surfaceStyle = { sphere: { radius: 1, colorscheme: "shapely" } };

export const StructureViz = (props: {
  pdb: string;
  clicked: Residue | null;
}) => {
  const [style, setStyle] = useState<style>("ribbon");
  const [previousLabels, setPreviousLabels] = useState<any[]>([]);
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [clickedSel, setClickedAtom] = useState<AtomSel[] | null>(null);

  const structureId = useRef("structureId");

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
          console.log("setting", matchingAtoms);
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
        console.log(clickedSel);
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
        viewer.setStyle({}, ribbonStyle);

        viewer.render();
      }
    };
    downloadAndViewPdb();
  }, [viewer, props.pdb]);

  const toggleSurfaceRibbon = () => {
    const next = style === "surface" ? "ribbon" : "surface";
    setStyle(next);
  };

  useEffect(
    function updateViewer() {
      if (viewer !== null) {
        if (style === "surface") {
          viewer.setStyle({}, surfaceStyle);
          viewer.render();
        } else if (style === "ribbon") {
          viewer.setStyle({}, ribbonStyle);
          viewer.render();
        }
      }
    },
    [viewer, style]
  );

  return (
    <div
      style={{
        borderColor: "white",
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
      <p>Fel d 1 | pdb: {props.pdb}</p>
      <div
        id={structureId.current}
        style={{
          minWidth: "40vw",
          minHeight: "40vw",
          position: "relative",
          alignSelf: "center",
        }}
      />
      <Button
        style={{ margin: 16 }}
        variant="secondary"
        onClick={() => toggleSurfaceRibbon()}
      >
        toggle surface/ribbon
      </Button>
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
