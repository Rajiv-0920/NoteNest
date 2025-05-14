import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    const isDark = localStorage.getItem("theme");
    if (isDark === "dark") document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-primary tracking-widest dark:text-primary">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mt-6 text-gray-700 dark:text-gray-300">
          Oops! Page not found.
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Link
          to="/notes"
          className="inline-block mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-[#e60048] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
