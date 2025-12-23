import { observer } from "mobx-react-lite";

const StyleSection = observer(({ element }: any) => {
  // ✅ Show only for text
  if (!element || element.type !== "text") return null;

  const fill = element.fill || "#ffffff";

  return (
    <div className="section">
      <h3>Style</h3>

      {/* Position */}
      <div className="row">
        <label>Position</label>
        <input
          type="number"
          value={Number(element.x).toFixed(2)}
          onChange={(e) =>
            element.set({ x: Number(e.target.value) })
          }
        />
        <input
          type="number"
          value={Number(element.y).toFixed(2)}
          onChange={(e) =>
            element.set({ y: Number(e.target.value) })
          }
        />
      </div>

      {/* Rotation */}
      <div className="row">
        <label>Rotation</label>
        <input
          type="number"
          value={element.rotation || 0}
          onChange={(e) =>
            element.set({ rotation: Number(e.target.value) })
          }
        />
      </div>

      {/* Text Color */}
      <div className="row">
        <label>Text Color</label>
        <input
          type="color"
          value={fill}
          onChange={(e) =>
            element.set({ fill: e.target.value }) // ✅ correct
          }
        />
        <input value={fill} readOnly />
      </div>

      {/* Font Size */}
      <div className="row">
        <label>Size</label>
        <input
          type="number"
          value={element.fontSize || 16}
          onChange={(e) =>
            element.set({ fontSize: Number(e.target.value) })
          }
        />
        <input
          type="range"
          min={8}
          max={96}
          value={element.fontSize || 16}
          onChange={(e) =>
            element.set({ fontSize: Number(e.target.value) })
          }
        />
      </div>

      {/* Font Family */}
      <label>Font</label>
      <select
        value={element.fontFamily || "Inter"}
        onChange={(e) =>
          element.set({ fontFamily: e.target.value })
        }
      >
        <option value="Inter">Inter</option>
        <option value="Roboto">Roboto</option>
      </select>

      {/* Font Weight */}
      <select
        value={element.fontWeight || "normal"}
        onChange={(e) =>
          element.set({ fontWeight: e.target.value })
        }
      >
        <option value="normal">Regular</option>
        <option value="bold">Bold</option>
      </select>
    </div>
  );
});

export default StyleSection;
