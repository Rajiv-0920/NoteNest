const NoteCardSkeleton = () => {
  return (
    <div className="relative w-full h-[160px] rounded-xl border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-lg">
      {/* Placeholder bars with shimmer */}
      <div className="h-6 rounded w-3/4 mb-3 bg-gray-300 dark:bg-gray-600 overflow-hidden relative">
        <div className="shimmer"></div>
      </div>
      <div className="h-3 rounded w-1/2 mb-5 bg-gray-300 dark:bg-gray-600 overflow-hidden relative">
        <div className="shimmer"></div>
      </div>
      <div className="h-4 rounded w-full mb-2 bg-gray-300 dark:bg-gray-600 overflow-hidden relative">
        <div className="shimmer"></div>
      </div>
      <div className="h-4 rounded w-5/6 bg-gray-300 dark:bg-gray-600 overflow-hidden relative">
        <div className="shimmer"></div>
      </div>

      {/* Dot Menu Placeholder with shimmer */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default NoteCardSkeleton;
