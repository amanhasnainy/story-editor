import { Icon } from "@blueprintjs/core";
import { SectionTab } from "polotno/side-panel";
import { observer } from "mobx-react-lite";

export const CTASection = {
  name: "cta",

  Tab: (props: any) => (
    <SectionTab name="CTA" {...props}>
      <Icon icon="caret-up" size={28} />
    </SectionTab>
  ),

  Panel: observer(({ store }: any) => {
    return (
      <div style={{ padding: 16 }}>
        {/* CTA controls here */}
        <button>Add CTA</button>
      </div>
    );
  }),
};
