export function MarkdownGuide() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow max-w-3xl mx-auto space-y-4 max-h-[552px] overflow-auto">
      <h2 className="text-xl font-bold">📘 Markdown Quick Guide</h2>

      <div>
        <h3 className="font-semibold text-lg">📌 Headings</h3>
        <p>Use `#` symbols for headings:</p>
        <p>
          <strong># H1 - Title</strong>
        </p>
        <p>
          <strong>## H2 - Section</strong>
        </p>
        <p>
          <strong>### H3 - Subsection</strong>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">✏️ Text Formatting</h3>
        <p>Use the following symbols for text formatting:</p>
        <p>
          <strong>**bold text**</strong>
        </p>
        <p>
          <em>*italic text*</em>
        </p>
        <p>
          <del>~~strikethrough~~</del>
        </p>
        <p>
          <code>`inline code`</code>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">📋 Lists</h3>
        <p>
          <strong>Unordered List:</strong>
        </p>
        <ul>
          <li>Item 1</li>
          <li>
            Item 2
            <ul>
              <li>Sub-item</li>
            </ul>
          </li>
          <li>Item 3</li>
        </ul>

        <p>
          <strong>Ordered List:</strong>
        </p>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
      </div>

      <div>
        <h3 className="font-semibold text-lg">🔗 Links</h3>
        <p>Create links using:</p>
        <p>
          <strong>[Link text](https://example.com)</strong>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">🖼️ Images</h3>
        <p>Embed images with:</p>
        <p>
          <strong>![Alt text](https://example.com/image.jpg)</strong>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">💬 Blockquote</h3>
        <p>For quotes, use:</p>
        <p>
          <strong>&gt; This is a quote.</strong>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">📐 Horizontal Rule</h3>
        <p>Create a horizontal rule using:</p>
        <p>
          <strong>---</strong>
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">🧾 Tables</h3>
        <p>To create tables:</p>
        <table className="border-collapse w-full text-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Alice</td>
              <td className="border px-4 py-2">Admin</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bob</td>
              <td className="border px-4 py-2">Editor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
