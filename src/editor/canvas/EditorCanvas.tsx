import { Workspace } from "polotno/canvas/workspace";

export default function EditorCanvas({ store }: any) {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        minHeight: 0,
        background: "#000",
      }}
    >
      <Workspace store={store} />
    </div>
  );
}
