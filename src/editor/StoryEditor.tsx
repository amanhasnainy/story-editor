import TopToolbar from "./toolbar/TopToolbar";
import EditorCanvas from "./canvas/EditorCanvas";
import { store } from "./store/editorStore";

export default function StoryEditor() {
  return (
    <div className="h-screen flex flex-col">
      <TopToolbar />

      <div className="flex flex-1 min-h-0">
        {/* Left panel later */}
        <EditorCanvas store={store} />
        {/* Right panel later */}
      </div>
    </div>
  );
}
