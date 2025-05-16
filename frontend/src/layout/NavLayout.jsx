import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col  items-center justify-start">
        <Header />
        {state === "loading" && (
          <div className="loader-container flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="spinner w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-medium">Loading notes...</p>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}
