import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import useThemeStore from "../store/useThemeStore";

export function RootLayout() {
  const { theme } = useThemeStore();

  return (
    <>
      <Outlet />
      <Toaster position="top-center" theme={theme} duration={3000} />
    </>
  );
}
