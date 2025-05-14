export function MarkdownPreview({ previewContent }) {
  return (
    <div className="prose dark:prose-invert prose-sm max-w-none bg-gray-50 dark:bg-gray-700 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-y-auto max-h-[552px]">
      <article>
        {/* Render parsed markdown preview here */}
        {previewContent ? (
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: previewContent }}
          />
        ) : (
          <p>Live preview will appear here...</p>
        )}
      </article>
    </div>
  );
}
