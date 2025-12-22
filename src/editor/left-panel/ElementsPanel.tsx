import { store } from "../store/editorStore";

export function ElementsPanel() {
  return (
    <div className="w-64 bg-[#111218] p-4 space-y-3">
      <button
        className="w-full bg-purple-600 py-2 rounded"
        onClick={() =>
          store.activePage?.addElement({
            type: "text",
            text: "New text",
            fontSize: 20,
            fill: "#FFFFFF",
          })
        }
      >
        Add Text
      </button>

      <button
        className="w-full bg-blue-600 py-2 rounded"
        onClick={() =>
          store.activePage?.addElement({
            type: "rect",
            fill: "#8B5CF6",
            width: 200,
            height: 50,
            custom: {
              role: "cta",
              link: "",
            },
          })
        }
      >
        Add CTA
      </button>
    </div>
  );
}
