import { Link } from "react-router-dom";

function NoSearchResult() {
  return (
    <section
      id="noSearchResultsSection"
      className="text-center py-24 max-w-xl mx-auto select-none px-4"
    >
      <h2 className="text-4xl font-extrabold text-primary mb-6">
        No Matching Notes
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        We couldn’t find any notes matching your search. Try a different keyword
        or create a new note.
      </p>
      <Link
        to="create"
        className="rounded-xl bg-primary text-white px-8 py-4 font-semibold text-xl hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-colors shadow-lg"
      >
        Create a New Note
      </Link>
    </section>
  );
}

export default NoSearchResult;
