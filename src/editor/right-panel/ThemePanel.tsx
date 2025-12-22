import { useState } from "react";

const themes = [
  { id: "dark", name: "Dark", bg: "#14151A", text: "#FFFFFF" },
  { id: "light", name: "Light", bg: "#FFFFFF", text: "#111827" },
  { id: "brand", name: "Brand", bg: "#F5F3FF", text: "#4C1D95" },
];

// 🔥 Storyly-style button
const themeButtonStyle = (active: boolean) => ({
  width: "100%",
  padding: "12px 14px",
  marginBottom: 10,
  borderRadius: 14,
  background: active
    ? "linear-gradient(180deg, #5B6CFF 0%, #4C5BFF 100%)"
    : "#171C3F",
  color: active ? "#FFFFFF" : "#A6ACD8",
  border: "1px solid #1F2552",
  cursor: "pointer",
  fontWeight: 500,
  transition: "all 0.2s ease",
});

export default function ThemePanel({ store }: any) {
  const [activeTheme, setActiveTheme] = useState("dark");

  const applyTheme = (theme: any) => {
    setActiveTheme(theme.id);

    store.pages.forEach((page: any) => {
      page.set({ background: theme.bg });
    });
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ marginBottom: 12, color: "#FFFFFF" }}>
        Themes
      </h3>

      {themes.map((theme) => (
        <button
          key={theme.id}
          style={themeButtonStyle(activeTheme === theme.id)}
          onClick={() => applyTheme(theme)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
