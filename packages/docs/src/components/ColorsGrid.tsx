import { colors } from "@cognu-ui/tokens";
import { getContrast } from "polished";

// getContrast(color, "#FFFFF") < 3.5 ? "#000" : "#fff"

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: "#FFF",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
