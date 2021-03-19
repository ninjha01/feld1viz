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
      fontSize: "calc(10px + 1vmin)"
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
          Click on a variant to show stats. Correlated variants are shown in <span style={{ color: colors.yellow }}> yellow </span>. Currently, this is only supported for variants in domestic cats.
        </p>
        <p>
          CRISPR Cut sites are underlined in <span style={{ color: colors.orange }}> orange </span>
        </p>
      </div>
    </div>
  );
};
