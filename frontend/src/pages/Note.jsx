import "../markdownPreview.css";
import { MenuBtn } from "../components/MenuBtn";
import { getNote } from "../../api/notes";
import { ScrollRestoration, useParams } from "react-router-dom";
import { formatDate } from "../lib/utils";
import { marked } from "marked";
import { useEffect, useState } from "react";
import useNotesStore from "../store/useNotesStore";

function Note() {
  const { id } = useParams();
  const { note, getNote, isNoteLoading } = useNotesStore();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) getNote(id);
    if (id && note.content) {
      setContent(marked.parse(note.content));
    }
  }, [id, getNote, note.content]);

  if (isNoteLoading) {
    return (
      <div className="max-w-3xl mx-auto h-[100%] min-h-screen w-full px-4">
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 px-4 py-8 md:px-12 animate-pulse text-gray-300 dark:text-gray-700">
          {/* <!-- Title --> */}
          <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          {/* <!-- Date --> */}
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>

          {/* <!-- Paragraphs --> */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>

          {/* <!-- List --> */}
          <div className="mt-8 space-y-3">
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-4 w-2/5 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>

          {/* <!-- Code Block --> */}
          <div className="mt-10 bg-gray-200 dark:bg-gray-800 rounded p-4 space-y-2">
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          {/* Table */}
          <div className="mt-10 space-y-3">
            <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="flex space-x-4">
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              </div>
              <div className="flex space-x-4">
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              </div>
              <div className="flex space-x-4">
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto h-[100%] min-h-screen w-full px-4">
        {/* Note */}
        <div className="flex justify-between items-start mt-[1.5rem]">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">
              {note.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
              Created on: {formatDate(note.createdAt)}
            </p>
          </div>
          {/* <!-- Menu --> */}
          <MenuBtn id={note._id} isPrintable={true} />
        </div>
        <article>
          {/* <!-- Note Content --> */}
          <div
            className="prose dark:prose-invert max-w-full"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          />
        </article>
      </div>
      <ScrollRestoration />
    </>
  );
}

export async function loader({ params, request: { signal } }) {
  const { id } = params;
  return getNote(id, signal);
}

export const noteRoute = {
  loader,
  element: <Note />,
};
