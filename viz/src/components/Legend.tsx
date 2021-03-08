import { useState, useEffect, useRef } from "react";

export const Legend = () => {
  return (
    <div
      style={{
        borderColor: "white",
        borderStyle: "dashed",
        borderWidth: 3,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        padding: 8,
        position: "relative",
        margin: 16,
      }}
    >
      <h3
      >
        Legend
      </h3>
      <div style={{ textAlign: "left", padding: 8 }}>
        <p>
          Variants are in <span style={{ color: "#2d8033" }}> green </span>
        </p>
        <p>
          Click on a variant to show stats. Correlated variants are shown in <span style={{ color: "#3c78ab" }}> blue </span>
        </p>
      </div>
    </div>
  );
};
