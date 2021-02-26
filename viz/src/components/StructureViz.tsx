import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";

interface Viewer {
  setStyle: (sel: any, style: any) => void;
  setClickable: (sel: any, clickable: boolean, callback: Function) => void;
  zoomTo: (sel: AtomSel, duration: number) => void;
  render: () => void;
}

interface AtomSel {
  resi: number;
  resn: string;
  chain: string;
}

export const StructureViz = (props: { pdb: string }) => {
  const [style, setStyle] = useState("surface");
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

  useEffect(
    function zoomToSelection() {
      if (viewer !== null && clickedAtom != null) {
        viewer.zoomTo(
          {
            resi: clickedAtom.resi,
            resn: clickedAtom.resn,
            chain: clickedAtom.chain,
          },
          1000
        );
      }
    },
    [clickedAtom]
  );

  useEffect(() => {
    const downloadAndViewPdb = async () => {
      if (viewer != null) {
        await $3Dmol.download("pdb:1pu0", viewer, {});
        viewer.setClickable(
          {},
          true,
          (atom: AtomSel, _: any, __: any, ___: any) => {
            setClickedAtom(atom);
          }
        );
        viewer.setStyle({}, { sphere: { radius: 3 } });
        viewer.render();
      }
    };
    downloadAndViewPdb();
  }, [viewer]);

  const toggleSurfaceRibbon = () => {
    const next = style === "surface" ? "ribbon" : "surface";
    setStyle(next);
  };

  useEffect(
    function updateViewer() {
      if (viewer !== null) {
        if (style === "surface") {
          viewer.setStyle({}, { sphere: { radius: 3 } });
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
    <div>
      <h1>STRUCTURE</h1>
      <p>{props.pdb}</p>
      <div
        id={structureId.current}
        style={{
          width: 500,
          height: 400,
          position: "relative",
        }}
      />
      <p> Clicked index: {clickedAtom?.resi}</p>
      <p> Clicked residue: {clickedAtom?.resn}</p>
      <p> Clicked chain: {clickedAtom?.chain}</p>
      <input
        value="toggle surface/ribbon"
        type="button"
        onClick={() => toggleSurfaceRibbon()}
      />
    </div>
  );
};
