import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "system",

  setTheme: (newTheme) => {
    set({ theme: newTheme });

    const root = document.documentElement;
    root.classList.remove("dark");
    if (newTheme === "dark") {
      localStorage.theme = "dark";
      root.classList.add("dark");
    } else if (newTheme === "light") {
      localStorage.theme = "light";
    } else {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      }
    }
  },
}));

export default useThemeStore;
