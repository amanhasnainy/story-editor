import { observer } from "mobx-react-lite";

const PRESETS = [
  { label: "Create header", size: 48, weight: "bold" },
  { label: "Create sub header", size: 32 },
  { label: "Create body text", size: 18 },
];

const CustomTextPanel = observer(({ store }: any) => {
  return (
    <div className="custom-text-panel">
      <h3>Text</h3>
      <p className="subtitle">My fonts</p>

      {PRESETS.map((p) => (
        <button
          key={p.label}
          className="text-preset"
          onClick={() => {
            store.activePage.addElement({
              type: "text",
              text: p.label,
              fontSize: p.size,
              fontWeight: p.weight || "normal",
              fill: "#ffffff", // ✅ WHITE TEXT
              fontFamily: "Inter",
              x: 100,
              y: 100,
            });
          }}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
});

export default CustomTextPanel;
