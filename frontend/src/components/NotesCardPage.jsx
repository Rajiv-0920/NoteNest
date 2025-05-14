import { useEffect } from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import useNotesStore from "../store/useFilterStore";
import NoSearchResult from "./NoSearchResult";

export function NotesCardPage({ notes }) {
  const { search, filter, showNotes, setSearch, setFilter, setNotes } =
    useNotesStore();

  useEffect(() => {
    setNotes(notes);
  }, [notes, setNotes]);

  return (
    <main className="flex-grow w-full max-w-screen-xl mx-auto px-0 sm:px-8 lg:px-10 py-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 space-y-6 sm:space-y-0">
        <input
          type="search"
          aria-label="Search notes by title"
          placeholder="Search notes by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value, notes)}
          className="w-full sm:max-w-xs rounded-md border border-gray-300 dark:border-gray-600 px-5 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
        />
        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => setFilter(e.target.value, notes)}
            value={filter}
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-5 py-3"
          >
            <option value="" disabled>
              Sort by date
            </option>
            <option value="1">Newest First</option>
            <option value="2">Oldest First</option>
          </select>
          <Link
            to="create"
            className="rounded-xl bg-primary text-white px-6 py-3 font-semibold text-lg"
          >
            Add Note
          </Link>
        </div>
      </header>

      {showNotes.length ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showNotes.map((note) => (
            <NoteCard key={note._id} {...note} />
          ))}
        </section>
      ) : (
        <NoSearchResult />
      )}
    </main>
  );
}
