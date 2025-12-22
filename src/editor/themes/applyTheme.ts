export function applyTheme(store: any, theme: any) {
  store.pages.forEach((page: any) => {
    // 1️⃣ Background
    page.set({
      background: theme.background,
    });

    // 2️⃣ Elements
    page.children.forEach((el: any) => {
      // Text
      if (el.type === "text") {
        el.set({
          fill: theme.text.color,
          fontFamily: theme.text.fontFamily,
        });
      }

      // CTA (custom role)
      if (el.custom?.role === "cta") {
        el.set({
          fill: theme.cta.background,
        });

        // CTA text inside
        const textChild = el.children?.[0];
        if (textChild) {
          textChild.set({
            fill: theme.cta.textColor,
          });
        }
      }
    });
  });
}
