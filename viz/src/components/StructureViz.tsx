import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";

export const StructureViz = (props: { pdb: string }) => {
  const [style, setStyle] = useState("stick");
  const [clickedAtomIdx, setClickedAtomIdx] = useState("None");
  const structureId = useRef("structureId");

  const toggleSurfaceStick = () => {
    const next = style === "surface" ? "stick" : "surface";
    setStyle(next);
  };

  useEffect(() => {
    let config = { backgroundColor: "#282c34" };
    let viewer = $3Dmol.createViewer(structureId.current, config);
    $3Dmol.download("pdb:1pu0", viewer, {}, (m: any) => {
      viewer.setStyle({}, { stick: {} });
      viewer.setClickable(
        {},
        true,
        (atom: any, viewer: any, _: any, __: any) => {
          setClickedAtomIdx(atom.index);
        }
      );
      viewer.zoomTo();
      viewer.render();
    });
  }, [structureId]);

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
      <p> Clicked index: {clickedAtomIdx}</p>
      <input value="toggle surface/stick" type="button" />
    </div>
  );
};
