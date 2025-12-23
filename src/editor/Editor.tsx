import { useEffect } from "react";
import CustomSidePanel from "./left-panel/CustomSidePanel";
import { DEFAULT_SECTIONS } from "polotno/side-panel";
import { CTASection } from "./left-panel/CTASection";


import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";

import TopBar from "./topbar/TopBar";
import RightSidebar from "./right-panel/RightSidebar";
import { STORYLY_COLORS } from "./themes/storylyColors";

import "@blueprintjs/core/lib/css/blueprint.css";

const store = createStore({
  key: "YOUR_POLOTNO_API_KEY",
  showCredit: true,
});

store.addPage();
const sections = [
  CTASection,
  ...DEFAULT_SECTIONS.filter(
    (s) => s.name !== "upload" // remove only what YOU want
  ),
];

export default function Editor() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: STORYLY_COLORS.appBg,
      }}
    >
      <TopBar />

      <PolotnoContainer
        style={{
          flex: 1,
          minHeight: 0, // 🔴 THIS IS CRITICAL
          background: STORYLY_COLORS.appBg,
        }}
      >

        {/* LEFT SIDEBAR (DOCKED – NOT OVERLAY) */}
        <SidePanelWrap
          style={{
            background: STORYLY_COLORS.panelBg,
            borderRight: `1px solid ${STORYLY_COLORS.border}`,
          }}
        >
          <SidePanel
            store={store}
            sections={sections}
            panels={{
              text: false, // ❌ disable Polotno text panel
            }}
          />
          

        </SidePanelWrap>

        {/* CENTER CANVAS */}
        <Workspace layout="horizontal"
          store={store}
          backgroundColor="black"
          pageBorderColor="black" // border around page
          activePageBorderColor="red" // border around active page (used when there are several pages)
          bleedColor="rgba(255, 0, 0, 0.2)" // color of the bleed area, toggled via store.toggleBleed()
          // optionally change default padding around page content
          // you can set it to 0 if you want full width and height of the canvas
          paddingX={5}
          paddingY={5}
          altCloneEnabled={true} // enable alt+drag to clone objects, default is true

          selectionRectFill="rgba(140, 194, 47, 0.3)"
          selectionRectStroke="rgb(0, 161, 255)"
          selectionRectStrokeWidth={1}

          snapGuideStroke="rgb(0, 161, 255)"
          snapGuideStrokeWidth={1}
          snapGuideDash={[4, 6]}

          transformLabelFill="rgb(0, 161, 255)"
          transformLabelTextFill="white"

          distanceGuideStroke="rgb(0, 161, 255)"
          distanceLabelFill="rgb(0, 161, 255)"
          distanceLabelTextFill="white"

          // optionally set safe area for tooltip to avoid overlapping with other elements that you may place on top of the workspace
          tooltipSafeArea={{
            top: 100,
            right: 100,
            bottom: 100,
            left: 100,
          }}
        />


        {/* RIGHT SIDEBAR */}
        <RightSidebar store={store} />
      </PolotnoContainer>
    </div>
  );
}
