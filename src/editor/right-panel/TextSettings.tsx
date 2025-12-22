import { STORYLY_COLORS } from "../themes/storylyColors";

export default function TextSettings({ element }: any) {
  return (
    <div>
      <h4 style={{ color: STORYLY_COLORS.textPrimary, marginBottom: 8 }}>
        Text
      </h4>

      <label style={{ color: STORYLY_COLORS.textSecondary, fontSize: 12 }}>
        Font Size
      </label>

      <input
        type="range"
        min={12}
        max={72}
        value={element.fontSize || 16}
        onChange={(e) =>
          element.set({ fontSize: Number(e.target.value) })
        }
        style={{ width: "100%" }}
      />

      <label
        style={{
          color: STORYLY_COLORS.textSecondary,
          fontSize: 12,
          marginTop: 10,
          display: "block",
        }}
      >
        Color
      </label>

      <input
        type="color"
        value={element.fill || "#ffffff"}
        onChange={(e) =>
          element.set({ fill: e.target.value })
        }
      />
    </div>
  );
}
