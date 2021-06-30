import { colors } from "../colors";

export const Legend = () => {
  return (
    <div
      style={{
        borderColor: colors.black,
        borderStyle: "dashed",
        borderWidth: 3,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        padding: 8,
        position: "relative",
        margin: 16,
        fontSize: "calc(10px + 1vmin)",
        width: "100%",
      }}
    >
      <h3>Legend</h3>
      <div style={{ textAlign: "left", padding: 8 }}>
        <p>
          Residues that can be mapped to the structure are in{" "}
          <span style={{ color: colors.black }}>dark grey</span>. Residues that
          cannot are in <span style={{ color: colors.grey }}>light grey</span>.
        </p>
        <p>
          Use the toggle to switch between Domestic and Exotic Variants.
          Correlated variants are in the same color.
        </p>
        <p>
          Click on a variant to show stats. Correlated variants will then be
          highlighted in <span style={{ color: colors.gold }}>gold</span>.
        </p>
      </div>
    </div>
  );
};
