import { colors } from "../colors"

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
        fontSize: "calc(10px + 1vmin)"
      }}
    >
      <h3
      >
        Legend
      </h3>
      <div style={{ textAlign: "left", padding: 8 }}>
        <p> Residues that can be mapped to the structure are in <strong>white</strong>. Residues that cannot are in <span style={{ color: colors.grey }}>grey</span>.
	</p>
        <p>
          Variants are in <span style={{ color: colors.blue }}>blue</span>. Use the toggle to switch between Domestic and Exotic Variants.
        </p>
        <p>
          Click on a variant to show stats. Correlated variants are shown in <span style={{ color: colors.yellow }}>yellow</span>. Currently, this is only supported for variants in domestic cats.
        </p>
      </div>
    </div>
  );
};
