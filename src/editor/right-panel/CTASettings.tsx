import { STORYLY_COLORS } from "../themes/storylyColors";

export default function CTASettings({ element }: any) {
  return (
    <div style={{ marginTop: 16 }}>
      <h4 style={{ color: STORYLY_COLORS.textPrimary }}>CTA</h4>

      <input
        type="text"
        placeholder="https://example.com"
        value={element.custom?.link || ""}
        onChange={(e) =>
          element.set({
            custom: {
              ...element.custom,
              link: e.target.value,
            },
          })
        }
        style={{
          width: "100%",
          padding: "8px 10px",
          borderRadius: 8,
          border: `1px solid ${STORYLY_COLORS.border}`,
          background: STORYLY_COLORS.cardBg,
          color: STORYLY_COLORS.textPrimary,
        }}
      />
    </div>
  );
}
