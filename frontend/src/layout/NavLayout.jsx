import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function NavLayout() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col  items-center justify-start">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
