import {colors} from "../colors"

export const Legend = () => {
  return (
    <div
      style={{
        borderColor: colors.white,
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
          Variants are in <span style={{ color: colors.blue }}> blue </span>. Use the toggle to switch between Domestic and Exotic Variants.
        </p>
        <p>
          Click on a variant to show stats. Correlated variants are shown in <span style={{ color: colors.green }}> green </span>
        </p>
        <p>
          CRISPR Cut sites are underlined in <span style={{ color: colors.orange }}> orange </span>
        </p>
      </div>
    </div>
  );
};
