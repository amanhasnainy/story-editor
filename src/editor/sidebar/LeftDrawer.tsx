export default function LeftDrawer() {
  return (
    <div
      style={{
        width: 64,
        background: "#0B0E1A",
        borderRight: "1px solid #1F2552",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 12,
        gap: 18,
      }}
    >
      {["Templates", "Text", "CTA", "Media", "Element"].map((item) => (
        <div
          key={item}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          ⬤
        </div>
      ))}
    </div>
  );
}
