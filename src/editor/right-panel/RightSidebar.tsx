import { observer } from "mobx-react-lite";
import { STORYLY_COLORS } from "../themes/storylyColors";
import ThemePanel from "./ThemePanel";
import TextSettings from "./TextSettings";
import CTASettings from "./CTASettings";

const RightSidebar = observer(({ store }: any) => {
  const selected = store.selectedElements[0];

  return (
    <div
  style={{
    width: 300,
    background: "linear-gradient(180deg, #151A36 0%, #0E1226 100%)",
    color: "#FFFFFF",
    padding: 18,
    borderLeft: "1px solid #1F2552",
  }}
>

      {/* THEMES (always visible) */}
      <ThemePanel store={store} />

      {/* PROPERTIES */}
      {selected?.type === "text" && <TextSettings element={selected} />}
      {selected?.custom?.role === "cta" && <CTASettings element={selected} />}
    </div>
  );
});

export default RightSidebar;
