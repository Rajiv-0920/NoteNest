import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";

export function RootLayout() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(localStorage.theme || "system");
  }, [setTheme]);

  return (
    <>
      <Outlet />
      <Toaster position="top-center" theme={theme} duration={3000} />
    </>
  );
}
