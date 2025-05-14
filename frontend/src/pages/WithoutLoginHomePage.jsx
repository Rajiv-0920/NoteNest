import { Link } from "react-router-dom";

export function WithoutLoginHomePage() {
  return (
    <div className="bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      {/* <!-- Header --> */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <h1 className="text-xl font-extrabold tracking-tight">NoteNest</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </a>
          <a
            href="about.html"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </a>
          <a
            href="auth.html"
            className="text-sm font-medium hover:text-primary"
          >
            Login
          </a>
        </nav>
        <Link
          to="signup"
          className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-all duration-300"
        >
          Get Started
        </Link>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="container mx-auto px-4 py-20 text-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Simplify Your Notes with{" "}
          <span className="text-primary">NoteNest</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          Effortlessly capture and organize your thoughts with a platform
          designed for productivity and ease.
        </p>
        <Link
          to="login"
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-medium hover:bg-pink-600 transition-all duration-300 shadow-md"
        >
          Try Now
        </Link>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">
          Why NoteNest?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <svg
              className="w-8 h-8 text-primary mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5h6m-3 4v6m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Intuitive Interface</h4>
            <p className="opacity-80 text-sm">
              Easy-to-use interface designed to boost your productivity.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <svg
              className="w-8 h-8 text-primary mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Fast Search</h4>
            <p className="opacity-80 text-sm">
              Quick search and instant filtering by title.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <svg
              className="w-8 h-8 text-primary mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Flexible Themes</h4>
            <p className="opacity-80 text-sm">
              Full dark/light/system theme support for comfortable use anytime.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <svg
              className="w-8 h-8 text-primary mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <h4 className="text-lg font-semibold mb-2">Cloud Sync</h4>
            <p className="opacity-80 text-sm">
              Cloud sync and accessible on all your devices.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="container mx-auto px-4 py-16 text-center bg-white dark:bg-gray-800">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
          Get Organized with NoteNest
        </h3>
        <p className="text-base opacity-80 mb-8 max-w-xl mx-auto">
          Start capturing your ideas today with a note-taking app built for you.
        </p>
        <Link
          to="signup"
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-medium hover:bg-pink-600 transition-all duration-300 shadow-md"
        >
          Sign Up Now
        </Link>
      </section>

      {/* <!-- Footer --> */}
      <footer className="container mx-auto px-4 py-8 text-center opacity-80">
        <p className="text-sm">© 2025 NoteNest. All rights reserved.</p>
        <div className="mt-3 space-x-6">
          <a href="#privacy" className="hover:text-primary text-sm">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-primary text-sm">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-primary text-sm">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
