import { useState, useEffect, useRef } from "react";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import { AtomSel, Viewer } from "./3DmolTypes";
import { Sequence } from "./SequenceViz";
import { Col, Button } from "react-bootstrap";

type style = "ribbon" | "surface";

export const StructureViz = (props: {
  pdb: string;
  clickCallback: (a: AtomSel) => void;
  clicked: AtomSel | null;
  chain1_sequence: Sequence;
  chain2_sequence: Sequence;
}) => {
  const [style, setStyle] = useState<style>("ribbon");
  const [clickedAtom, setClickedAtom] = useState<AtomSel | null>(null);
  const structureId = useRef("structureId");

  const [viewer, setViewer] = useState<Viewer | null>(null);

  useEffect(
    function initializeViewer() {
      const config = { backgroundColor: "#282c34" };
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
        if (clickedAtom.chain === "A") {
          props.clickCallback(props.chain1_sequence.residues[clickedAtom.resi]);
        }
        if (clickedAtom.chain === "B") {
          props.clickCallback(props.chain2_sequence.residues[clickedAtom.resi]);
        }
        viewer.zoomTo(
          {
            resi: clickedAtom.resi,
          } as AtomSel /* HACK: actually implement zoom correctly */,
          1000
        );
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
            /* setClickedAtom(atom); */
            debugger;
            viewer.zoomTo(atom, 100);
          }
        );
        viewer.setStyle({}, { cartoon: { color: "spectrum", arrows: true } });

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
          viewer.setStyle({}, { sphere: { radius: 1 } });
          viewer.render();
        } else if (style === "ribbon") {
          viewer.setStyle({}, { cartoon: { color: "spectrum", arrows: true } });
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
        maxWidth: "100vw",
        position: "relative",
        margin: 16
      }}
    >
      <p>Fel d 1 | pdb: {props.pdb}</p>
      <div
        id={structureId.current}
        style={{
          minWidth: 200,
          minHeight: 200,
          position: "relative",
          alignSelf: "center",
        }}
      />
      <Button
        style={{ margin: 8 }}
        variant="secondary"
        onClick={() => toggleSurfaceRibbon()}
      >
        toggle surface/ribbon
      </Button>
    </div>
  );
};
