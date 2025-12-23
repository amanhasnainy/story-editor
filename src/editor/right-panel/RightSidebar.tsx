import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import GeneralTab from "./tabs/GeneralTab";
import AnimationTab from "./tabs/AnimationTab";
import "./rightSidebar.css";

const RightSidebar = observer(({ store }: any) => {
  const [tab, setTab] = useState<"general" | "animation">("general");

  const hasSelection = store.selectedElements.length > 0;

  // ✅ Auto-switch back to General when selection is cleared
  useEffect(() => {
    if (!hasSelection && tab === "animation") {
      setTab("general");
    }
  }, [hasSelection, tab]);

  return (
    <div className="storyly-right">
      {/* Tabs */}
      <div className="storyly-tabs">
        <button
          className={`tab-button ${tab === "general" ? "active" : ""}`}
          onClick={() => setTab("general")}
        >
          General
        </button>

        <button
          className={`tab-button ${
            tab === "animation" ? "active" : ""
          } ${!hasSelection ? "disabled" : ""}`}
          disabled={!hasSelection}
          onClick={() => hasSelection && setTab("animation")}
        >
          Animation
        </button>
      </div>

      {/* Content */}
      <div className="storyly-tab-content">
        {tab === "general" && <GeneralTab store={store} />}

        {tab === "animation" && hasSelection && (
          <AnimationTab store={store} />
        )}
      </div>
    </div>
  );
});

export default RightSidebar;
