import NoteCardSkeleton from "./NoteCardSkeleton";

export function MainSkeletonLayout() {
  return (
    <main className="flex-grow w-full max-w-screen-xl mx-auto sm:px-8 lg:px-10 py-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 space-y-6 sm:space-y-0">
        <div className="w-full h-[48px] sm:max-w-xs rounded-md border bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 px-5 py-3  text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"></div>

        <div className="flex items-center space-x-4">
          <div className="w-[150px] h-[48px] rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="w-[120px] h-[48px] rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(7)].map((_, i) => (
          <NoteCardSkeleton key={i} />
        ))}
      </section>
    </main>
  );
}
