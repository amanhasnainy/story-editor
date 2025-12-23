import { observer } from "mobx-react-lite";
import ContentSection from "../sections/ContentSection";
import StyleSection from "../sections/StyleSection";
import ActionsSection from "../sections/ActionsSection";
import ThemeSection from "../sections/ThemeSection";

const GeneralTab = observer(({ store }: any) => {
  const element = store.selectedElements[0];

  // ✅ PAGE SELECTED (nothing selected)
  if (!element) {
    return <ThemeSection store={store} />;
  }

  // ✅ ELEMENT SELECTED
  return (
    <>
      <ContentSection element={element} />
      <StyleSection element={element} />
      <ActionsSection element={element} />
    </>
  );
});

export default GeneralTab;
