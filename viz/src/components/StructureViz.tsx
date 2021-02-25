import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";

interface Viewer {
  setStyle: (sel: any, style: any) => void;
  setClickable: (sel: any, clickable: boolean, callback: Function) => void;
  render: () => void;
}

export const StructureViz = (props: { pdb: string }) => {
  const [style, setStyle] = useState("surface");
  const [clickedIdx, setClickedIdx] = useState("None");
  const [clickedResidue, setClickedResidue] = useState("None");
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
    const downloadAndViewPdb = async () => {
      if (viewer != null) {
        await $3Dmol.download("pdb:1pu0", viewer, {});
        viewer.setClickable(
          {},
          true,
          (atom: any, viewer: any, _: any, __: any) => {
            setClickedIdx(atom.resi);
            setClickedResidue(atom.resn);
            viewer.zoomTo(
              { resi: [atom.resi - 5, atom.resi, atom.resi + 5] },
              1000
            );
          }
        );
        viewer.setStyle({}, { sphere: { radius: 3 } });
        viewer.render();
      }
    };
    downloadAndViewPdb();
  }, [viewer]);

  const toggleSurfaceStick = () => {
    const next = style === "surface" ? "ribbon" : "surface";
    setStyle(next);
  };

  useEffect(
    function updateViewer() {
      if (viewer !== null) {
        if (style === "surface") {
          viewer.setStyle({}, { sphere: { radius: 3 } });
        } else if (style === "ribbon") {
          viewer.setStyle({}, { cartoon: {} });
        }
      }
    },
    [style]
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
      <p> Clicked index: {clickedIdx}</p>
      <p> Clicked residue: {clickedResidue}</p>
      <input
        value="toggle surface/ribbon"
        type="button"
        onClick={toggleSurfaceStick}
      />
    </div>
  );
};
