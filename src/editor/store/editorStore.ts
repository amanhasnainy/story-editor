import { createStore } from "polotno/model/store";

export const store = createStore({
  key: "TXsh4gxnlODn4eJrqeDi",
  showCredit: true, // ✅ REQUIRED by types
});

// Make sure at least one page exists
if (store.pages.length === 0) {
  store.addPage();
}
