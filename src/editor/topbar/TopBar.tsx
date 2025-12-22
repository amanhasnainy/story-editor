export default function TopBar() {
  return (
    <div
      style={{
        height: 56,
        background: "#0b0e1a",
        borderBottom: "1px solid #1f2552",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
      }}
    >
      <div style={{ color: "#fff", fontWeight: 600 }}>
        Story Editor
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button style={ghost}>Cancel</button>
        <button style={primary}>Save</button>
      </div>
    </div>
  );
}

const ghost = {
  background: "transparent",
  color: "#fff",
  border: "1px solid #1f2552",
  borderRadius: 10,
  padding: "8px 14px",
};

const primary = {
  background: "#5b6cff",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  padding: "8px 14px",
};
