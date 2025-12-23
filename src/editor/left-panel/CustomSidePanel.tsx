import { observer } from "mobx-react-lite";

const CustomSidePanel = observer(({ store }: any) => {
  const page = store.activePage;

  if (!page) return null;

  /* ---------------- ADD CTA ---------------- */
  const addCTA = () => {
    const button = page.addElement({
      type: "rect",
      width: 220,
      height: 48,
      rx: 24,
      ry: 24,
      fill: "#5B6CFF",
      x: 100,
      y: 200,
    });

    const label = page.addElement({
      type: "text",
      text: "Swipe Up",
      fill: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
      x: 100,
      y: 200,
      width: 220,
      align: "center",
      verticalAlign: "middle",
    });

    page.addElement({
      type: "group",
      children: [button.id, label.id],
    });
  };

  /* ---------------- DELETE PHOTOS ---------------- */
  const deleteSelectedPhotos = () => {
    store.selectedElements.forEach((el: any) => {
      if (el.type === "image") {
        el.remove();
      }
    });
  };

  const hasImageSelected = store.selectedElements.some(
    (el: any) => el.type === "image"
  );

  return (
    <div className="custom-side-panel">
      <h3>Elements</h3>

      <button onClick={addCTA}>➕ CTA Button</button>

      <button
        disabled={!hasImageSelected}
        onClick={deleteSelectedPhotos}
      >
        🗑 Delete Photo
      </button>
    </div>
  );
});

export default CustomSidePanel;
