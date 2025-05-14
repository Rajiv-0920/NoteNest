import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect } from "react";
import { toast } from "sonner";
import { googleLogout, logout } from "../../api/auth";
import useThemeStore from "../store/useThemeStore";

export function Header() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(localStorage.theme || "system");
  }, [setTheme]);

  const navigate = useNavigate();
  async function handleLogout() {
    localStorage.removeItem("jwtToken"); // Clear your JWT if stored
    logout(); // Call backend logout if needed (optional)
    googleLogout();
    toast.success("Logged out successfully.");
    navigate("/login"); // Redirect to login
  }

  return (
    <nav className="print:hidden w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* <!-- Logo --> */}
        <Link
          to=""
          className="flex items-center text-primary text-2xl font-extrabold select-none hover:opacity-90 transition-opacity"
        >
          Note<span className="dark:text-gray-300 text-gray-600">Nest</span>
        </Link>

        {/* <!-- Theme selector & Profile dropdown --> */}
        <div className="flex items-center space-x-6">
          {/* <!-- Theme dropdown --> */}
          <div className="relative">
            <label htmlFor="themeSelector" className="sr-only">
              Select Theme
            </label>
            <select
              id="themeSelector"
              aria-label="Theme selector"
              className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <button
            id="logoutButton"
            className="block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md"
            onClick={handleLogout}
          >
            <LogoutIcon /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
