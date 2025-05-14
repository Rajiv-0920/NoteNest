import { Link } from "react-router-dom";

export function NoNotesPage() {
  return (
    <section
      id="noNotesSection"
      className="max-w-3xl mx-auto py-20 text-center px-4"
    >
      <h1 className="text-4xl font-extrabold text-primary mb-4">
        Welcome to <span className="text-black dark:text-white">NoteNest</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        Your smart, secure, and intuitive note-taking app to keep all your
        ideas, tasks, and inspirations neatly organized.
      </p>

      <ul className="text-left space-y-4 mb-10 max-w-md mx-auto">
        {[
          "Easy-to-use interface designed to boost your productivity",
          "Quick search and instant filtering by title",
          "Full dark/light/system theme support for comfortable use anytime",
          "Cloud sync and accessible on all your devices",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-gray-700 dark:text-gray-300"
          >
            <svg
              className="w-5 h-5 text-primary mt-1 mr-3 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.41-7.59l-2.3-2.3a1 1 0 111.42-1.42L10 8.58l2.3-2.3a1 1 0 111.42 1.42l-3 3a1 1 0 01-1.42 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        to="create"
        className="inline-block rounded-xl bg-primary text-white px-8 py-3 font-semibold text-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all shadow-lg"
      >
        🚀 Get Started — Create Your First Note
      </Link>
    </section>
  );
}
