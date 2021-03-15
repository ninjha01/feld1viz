import { useState, useEffect, useRef } from "react";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import { AtomSel, Viewer } from "./3DmolTypes";
import { Sequence } from "./SequenceViz";
import { Button } from "react-bootstrap";
import { colors } from "../colors";

type style = "ribbon" | "surface";
const ribbonStyle = { cartoon: { colorscheme: "shapely" } };
const surfaceStyle = { sphere: { radius: 1, colorscheme: "shapely" } };

export const StructureViz = (props: {
  pdb: string;
  clickCallback: (a: AtomSel) => void;
  clicked: AtomSel | null;
  chain1_sequence: Sequence;
  chain2_sequence: Sequence;
}) => {
  const [style, setStyle] = useState<style>("ribbon");
  const [clickedAtom, setClickedAtom] = useState<AtomSel | null>(null);
  const [previousLabels, setPreviousLabels] = useState<any[]>([]);
  const structureId = useRef("structureId");

  const [viewer, setViewer] = useState<Viewer | null>(null);

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

  useEffect(() => {
    if (props.clicked) {
      setClickedAtom(props.clicked);
    }
  }, [props.clicked]);

  useEffect(
    function zoomToSelection() {
      if (viewer !== null && clickedAtom != null) {
        const CA = (clickedAtom as unknown) as {
          resn: string;
          x: number;
          y: number;
          z: number;
        };
        /* if (clickedAtom.chain === "A") {
         *   props.clickCallback(props.chain1_sequence.residues[clickedAtom.resi]);
         * }
         * if (clickedAtom.chain === "B") {
         *   props.clickCallback(props.chain2_sequence.residues[clickedAtom.rsesi]);
         * } */
        if (previousLabels) {
          previousLabels.forEach((x) => {
            console.log("removing", x);
            viewer.removeLabel(x);
          });
          viewer.render();
        }
        console.log("adding label");
        const labels = [
          {
            title: CA.resn,
            style: {
              position: { x: CA.x, y: CA.y, z: CA.z },
              backgroundColor: colors.orange,
              backgroundOpacity: 0.8,
            },
          },
        ];
        setPreviousLabels(labels.map((l) => viewer.addLabel(l.title, l.style)));
        viewer.render();
        /* 
	   viewer.zoomTo(
	   {
	   resi: clickedAtom.resi,
	   } as AtomSel /* HACK: actually implement zoom correctly *,
           1000
	   ); */
      }
    },
    [props.clickCallback, clickedAtom, viewer]
  );

  useEffect(() => {
    const downloadAndViewPdb = async () => {
      if (viewer != null) {
        await $3Dmol.download(`pdb:${props.pdb}`, viewer, {});
        viewer.setClickable(
          {},
          true,
          (atom: AtomSel, _: any, __: any, ___: any) => {
            setClickedAtom(atom);
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
