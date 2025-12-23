import { observer } from "mobx-react-lite";
import AnimationSection from "../sections/AnimationSection";

const AnimationTab = observer(({ store }: any) => {
  const element = store.selectedElements[0];

  if (!element) {
    return (
      <div style={{ color: "#9aa3b2" }}>
        Select an element to animate
      </div>
    );
  }

  return <AnimationSection element={element} />;
});

export default AnimationTab;
