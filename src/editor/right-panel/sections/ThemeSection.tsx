import { observer } from "mobx-react-lite";

const DARK_BG = "#0B0E1A";
const LIGHT_BG = "#FFFFFF";

const ThemeSection = observer(({ store }: any) => {
  const applyThemeToAllPages = (background: string) => {
    store.pages.forEach((page: any) => {
      page.set({
        background,
      });
    });
  };

  return (
    <div className="theme-section">
      <button
        className="theme-btn"
        onClick={() => applyThemeToAllPages(DARK_BG)}
      >
        Dark
      </button>

      <button
        className="theme-btn"
        onClick={() => applyThemeToAllPages(LIGHT_BG)}
      >
        Light
      </button>
    </div>
  );
});

export default ThemeSection;
