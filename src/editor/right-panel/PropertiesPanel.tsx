import { observer } from "mobx-react-lite";
import type { StoreType } from "polotno/model/store";
import  TextSettings  from "./TextSettings";
import CTASettings  from "./CTASettings";

export const PropertiesPanel = observer(({ store }: { store: StoreType }) => {
  const element = store.selectedElements[0];

  if (!element) {
    return <div className="w-72 bg-[#111218] p-4">No selection</div>;
  }

  return (
    <div className="w-72 bg-[#111218] p-4">
      {element.type === "text" && <TextSettings element={element} />}
      {element.custom?.role === "cta" && <CTASettings element={element} />}
    </div>
  );
});
